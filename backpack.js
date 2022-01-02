class backpack{
    constructor(
        name,
        volumn,
        color,
        pocketnum,
        straplengthL,
        straplengthR,
        lidOpen,
        dateAccquired
    ){
        this.name=name,
        this.color=color,
        this.volumn=volumn,
        this.pocketnum=pocketnum,
        this.strapLength={
            left:straplengthL,
            right:straplengthR,
        };
        this.lidOpen=lidOpen;
        this.dateAccquired=dateAccquired;
    }
    toggleLid(lidStatus){
        this.lidOpen = lidStatus;
    }
    newStraplength(lengthleft, lengthright){
        this.strapLength.left=lengthleft;
        this.strapLength.right=lengthright;
    }   
    age() {
        let now = new Date();
        let accquired = new Date(this.dateAccquired);
        let eslaped = now - accquired;//in milliseconds
        let daysinceAccquired = Math.floor(eslaped/(1000*3600*24));
        return daysinceAccquired;
    }   
}
export default backpack;