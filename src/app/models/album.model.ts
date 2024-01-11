export interface Album{
    albumId?: string;
    title: string;
    artists: string;
    cover: string
    // artists: Artist[];
    musics: Music[];
    release: Date;
}

export interface Music{
    musicId?: string;
    title: string;
    // artist: Artist[];
    artists: string;
    release: Date;
    duration: number
    //is explicit?
}

// export interface Artist{
//     artistId: string;
//     name: string;
//     monthlylisteners: number;
//     albums: Album[];
// }