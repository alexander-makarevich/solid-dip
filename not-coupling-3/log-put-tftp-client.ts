import { ITftpClient } from "./i-tftp-client";

export class LogPutTftpClient implements ITftpClient {
    constructor(private tftpClient: ITftpClient) { }

    put(fname: string, ftext: string) {
        console.log(`${LogPutTftpClient.name}.${this.put.name}`
            +`('${fname}', '${ftext}') called`);
        this.tftpClient.put(fname, ftext);
    }

    get(fname: string): string {
        return this.tftpClient.get(fname);
    }
}