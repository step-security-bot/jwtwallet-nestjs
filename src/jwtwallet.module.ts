import { Module } from "@nestjs/common";
import { ConfigModuleBuilder } from "./jwtwallet.module-definition";
import { JWTWalletService } from "./jwtwallet.service";
import type { JWTWalletModuleModuleOptions } from "./jwtwallet.module-options.interface";

@Module({
  providers: [JWTWalletService],
  exports: [JWTWalletService]
})
class JWTWalletModule extends ConfigModuleBuilder.ConfigurableModuleClass {}

export { JWTWalletModule, JWTWalletService, JWTWalletModuleModuleOptions };
