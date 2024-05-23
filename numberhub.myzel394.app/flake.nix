{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = nixpkgs.legacyPackages.${system}; in {
        packages.default = pkgs.buildNpmPackage {
          pname = "numberhub.myzel394.app";
          version = "0.0.1";

          src = self;
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
      });
}

