with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "env";
  buildInputs = [
    bashInteractive
    unstable-small.nodejs-10_x
    unstable-small.yarn
  ];
}
