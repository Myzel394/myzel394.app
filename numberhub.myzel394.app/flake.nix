{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, utils }:
    utils.lib.eachDefaultSystem (system:
      let
          pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShell = pkgs.mkShell {
            buildInputs = [
              pkgs.nodejs
              pkgs.nodePackages.npm
              pkgs.nodePackages.typescript
            ];
        };
      });
}

