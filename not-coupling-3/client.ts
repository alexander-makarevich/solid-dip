import { ITftpClient } from "./i-tftp-client";
import { LogGetTftpClient } from "./log-get-tftp-client";
import { LogPutTftpClient } from "./log-put-tftp-client";
import { ProxyTftpClient } from "./proxy-tftp-client";
import { TftpClient } from "./tftp-client";

export class Client {
    readonly fname = 'fname.txt';
    readonly ftext = 'my f text';

    work() {
        const tftpClient: ITftpClient = new LogGetTftpClient(new LogPutTftpClient(new TftpClient));
        tftpClient.put(this.fname, this.ftext);
        const ftext2 = tftpClient.get(this.fname);
        console.log(`> ${this.fname}\n> ${ftext2}`);
    }
}