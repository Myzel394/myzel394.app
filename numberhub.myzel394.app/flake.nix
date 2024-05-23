{
    inputs = {
        nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
        systems.url = "github:nix-systems/default";
        gitignore = {
            url = "github:hercules-ci/gitignore.nix";
            inputs.nixpkgs.follows = "nixpkgs";
        };
    };
    outputs = { self, systems, nixpkgs, gitignore }:
        let
            eachSystem = packages:
                nixpkgs.lib.genAttrs (import systems) (
                    system:
                    packages nixpkgs.legacyPackages.${system}
                );
        in
        {
            packages.${system}.default = pkgs.buildNpmPackage {
                inherit nodejs;
                name = "numberhub.myzel394.app";

                src = gitignore.lib.gitignoreSource ./.;
                npmDepsHash = "sha256-RZc7YMCvS5ds/gSDMJr7IPp/UriiF7w1C2NO/hAJ0w4=";
                npmBuildScript = "build";

                # The prepack script runs the build script, which we'd rather do in the build phase.
                npmPackFlags = [ "--ignore-scripts" ];

                installPhase = ''
                    runHook preInstall

                    mkdir $out
                    cp -r build $out/build

                    runHook postInstall
                    '';
            };
        };
}
