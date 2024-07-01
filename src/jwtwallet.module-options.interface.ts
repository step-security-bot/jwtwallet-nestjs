export interface JWTWalletModuleModuleOptions {
  /**
   * Private key in JWK format base64 encoded
   */
  privateKey?: string;

  /**
   * Public key for production purposes. FQDN of the issuer
   */
  issuer?: string;

  /**
   * Public key for development purposes. JWK format base64 encoded
   */
  devPublicKey?: string;

  /**
   * Port to listen on for public key requests for development purposes, defaults to 8080
   */
  devPort?: string;
}
