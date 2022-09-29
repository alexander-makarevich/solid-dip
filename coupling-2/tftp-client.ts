export class TftpClient {
    files = new Map<string, string>();

    put(fname: string, ftext: string) {
        console.log(`${TftpClient.name}.${this.put.name}('${fname}', '${ftext}') called`);
        this.files.set(fname, ftext);
    }

    get(fname: string): string {
        const ftext = this.files.get(fname);
        console.log(`${TftpClient.name}.${this.put.name}('${fname}'): '${ftext}' called`);
        return ftext;
    }
}
