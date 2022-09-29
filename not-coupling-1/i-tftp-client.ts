export interface ITftpClient {
    put(fname: string, ftext: string): void;
    get(fname: string): string;
}