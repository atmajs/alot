export interface AlotStreamOpts {
    async?: boolean
}

export interface AlotMeta {

}
export interface AlotMetaAsync extends AlotMeta {
    threads?: number
    errors?: 'include' | 'ignore' | 'reject'
}