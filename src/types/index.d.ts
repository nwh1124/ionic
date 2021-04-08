interface GlobalState {
  loginedMember:Member;
  isLogined: boolean;
}

interface Member {
  id:int,
  regDate:string,
  updateDate:string,
  authLevel:int,
  cellphoneNo:string,
  email:string,
  extra__thumbImg:string,
  loginId:int,
  name:string,
  nickname:string,
}