import { ITftpClient } from "./i-tftp-client";
import { TftpClient } from "./tftp-client";

export class ProxyTftpClient implements ITftpClient {
    tftpClient: ITftpClient = new TftpClient();

    put(fname: string, ftext: string) {
        console.log(`${TftpClient.name}.${this.put.name}('${fname}', '${ftext}') called`);
        this.tftpClient.put(fname, ftext);
    }

    get(fname: string): string {
        const ftext = this.tftpClient.get(fname);
        console.log(`${TftpClient.name}.${this.put.name}('${fname}'): '${ftext}' called`);
        return ftext;
    }
}