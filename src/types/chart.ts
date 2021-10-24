export interface Series {
    name:string;
    data:[][];
}
export interface ChartScale{
    x:{
        max?:number;
        min?:number;
    }
    y:{
        max?:number;
        min?:number;
    }
}