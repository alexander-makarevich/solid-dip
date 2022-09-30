import { ITftpClient } from "./i-tftp-client";

export class LogGetTftpClient implements ITftpClient {
    constructor(private tftpClient: ITftpClient) { }

    put(fname: string, ftext: string) {
        this.tftpClient.put(fname, ftext);
    }

    get(fname: string): string {
        const ftext = this.tftpClient.get(fname);
        console.log(`${LogGetTftpClient.name}.${this.put.name}`
            +`('${fname}'): '${ftext}' called`);
        return ftext;
    }
}