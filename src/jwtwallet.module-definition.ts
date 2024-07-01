import { ConfigurableModuleBuilder } from "@nestjs/common";
import type { JWTWalletModuleModuleOptions } from "./jwtwallet.module-options.interface";

export const ConfigModuleBuilder =
  new ConfigurableModuleBuilder<JWTWalletModuleModuleOptions>()
    .setClassMethodName("forRoot")
    .setExtras(
      {
        isGlobal: true
      },
      (definition, extras) => ({
        ...definition,
        global: extras.isGlobal
      })
    )
    .build();
