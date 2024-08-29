export const API_KEY="AIzaSyC5mfnIejMh3fo1lqsKVk6Xiy8vOAPk3lM";

export const valueConverter = (value) => {
    if(value >= 1000000){
        return Math.floor(value/1000000)+"M";
    }else if(value >= 1000){
        return Math.floor(value/1000)+"K";
    }else{
        return value;
    }
}

