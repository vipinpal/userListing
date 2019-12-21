export const getFilterData = (keys, data) => {
    let filters = {};
    data.forEach(d => {
        keys.forEach(k => {
            if(k in filters) {
                if (k === 'origin') {
                    filters[k].push(d[k].name);
                } else {
                    filters[k].push(d[k]);
                }
            } else {
                if (k === 'origin') {
                    filters[k] = [d[k].name];
                } else {
                    filters[k] = [d[k]];
                }
            }
        })
    });
    keys.forEach(k => {
        if(k in filters) {
            filters[k] = Array.from(new Set(filters[k]));
        }
    });
    return filters;
}