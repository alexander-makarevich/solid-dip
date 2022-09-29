import { TftpClient } from "./tftp-client";

export class Client {
    readonly fname = 'fname.txt';
    readonly ftext = 'my f text';

    work() {
        const tftpClient = new TftpClient();
        tftpClient.put(this.fname, this.ftext);
        const ftext = tftpClient.get(this.fname);
        console.log(`> ${this.fname}\n> ${this.ftext}`)
    }
}