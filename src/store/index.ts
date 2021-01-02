import { Database } from 'vuex-typed-modules';
import { Context, NuxtAppOptions } from '@nuxt/types';
import { clearToken, getToken } from '@services';
import * as Modules from '../vuex-modules';

const database = new Database({ logger: process.browser });

const modules = Object.entries(Modules).map(([key, value]) => value);
export const plugins = [database.deploy(modules)];

export const state = () => ({});
export const strict = false;

export const actions = {
  async nuxtClientInit(_: any, { $cookies }: NuxtAppOptions) {
    const user = await getToken();
    if (user) {
      try {
        Modules.AuthModule.mutations.connectUser(user);
      } catch (e) {
        console.log(e);
        Modules.AuthModule.actions.disconnectUser();
      }
    } else {
      Modules.AuthModule.actions.disconnectUser();
    }
  },
};
