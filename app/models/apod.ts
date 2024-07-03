export interface IApod {
    title: string;
    date: string;
    explanation: string;
    url: string;
    hdurl: string;
    mediaType: string;
    serviceVersion: string;
    isVideo: boolean;
    isImage: boolean;
    videoId: string;
    getPlainObject(): any;
}


export class Apod implements IApod{

    private _title = '';
    private _date = '';
    private _explanation = '';
    private _url = '';
    private _hdurl = '';
    private _mediaType = '';
    private _serviceVersion = '';
    private _isVideo = false;
    private _isImage = false;
    private _videoId = '';
    
    constructor(json?: any) {
        if(json) {
            this._title = json.title;
            this._date = json.date;
            this._explanation = json.explanation;
            this._url = json.url;
            this._hdurl = json.hdurl;
            this._mediaType = json.media_type;
            this._serviceVersion = json.service_version;
            if (this.mediaType === 'video') {
                this._isVideo = true;
                this._isImage = false;
                this._videoId = this._getVideoId(json.url);
            }else if (this.mediaType === 'image') {
                this._isImage = true;
                this._isVideo = false;
            }
        }
    }
    async getApod(url: string) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    get title() {
        return this._title;
    }

    get date() {
        return this._date;
    }

    get explanation() {
        return this._explanation;
    }

    get url() {
        return this._url;
    }

    get hdurl() {
        return this._hdurl;
    }

    get mediaType() {
        return this._mediaType;
    }

    get serviceVersion() {
        return this._serviceVersion;
    }

    get isVideo() {
        return this._isVideo;
    }

    get isImage() {
        return this._isImage;
    }

    get videoId() {
        return this._videoId;
    }

    private _getVideoId(url: string): string {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match&&match[7].length==11)? match[7] : '';
    }

    public getPlainObject() {
        return {
            title: this.title,
            date: this.date,
            explanation: this.explanation,
            url: this.url,
            hdurl: this.hdurl,
            mediaType: this.mediaType,
            serviceVersion: this.serviceVersion,
            isVideo: this.isVideo,
            isImage: this.isImage,
            videoId: this.videoId
        }
    }

}