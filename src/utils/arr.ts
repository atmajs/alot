export function arr_last (arr: any[]) {
    if (arr == null || arr.length === 0) {
        return null;
    }
    return arr[ arr.length - 1 ];
}