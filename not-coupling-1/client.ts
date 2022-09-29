import { ITftpClient } from "./i-tftp-client";
import { TftpClient } from "./tftp-client";

export class Client {
    readonly fname = 'fname.txt';
    readonly ftext = 'my f text';

    work() {
        const tftpClient: ITftpClient = new TftpClient();
        tftpClient.put(this.fname, this.ftext);
        const ftext = tftpClient.get(this.fname);
        console.log(`> ${this.fname}\n> ${ftext}`);
    }
}