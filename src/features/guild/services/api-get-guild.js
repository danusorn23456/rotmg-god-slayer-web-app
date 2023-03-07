import { realm } from "services/instance/realm";

export async function apiGetGuild(payload){
    const { name } = payload;
    return await realm.get(`guild/${name}`, { crossdomain: true });
}