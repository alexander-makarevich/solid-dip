import { ITftpClient } from "./i-tftp-client";

export class TftpClient implements ITftpClient {
    files = new Map<string, string>();

    put(fname: string, ftext: string) {
        this.files.set(fname, ftext);
    }

    get(fname: string): string {
        return this.files.get(fname);
    }
}