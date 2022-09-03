import { createContext, ReactNode, useState } from 'react'

export type DenunciaTypes = {

    username : string,
    category : string,
    location : number[],
    eventDate : string,
    image : string,
    cratedAt : string,
    region: string

}


export type OngsTypes = {
    name : string,
    description : string,
    meta : number ,
    valorAtual : number,
    image : string
    users? : UserTypes[]

}

export type UserTypes = {
    id : number,
    name : string,
    description : string,
    xp : number,
    medals : MedalsType[],
    image : string
}

export type MedalsType = {
    name : string,
    level: number,
    image:string
}


type DbContextType = {
  addDenuncia : (denuncia:DenunciaTypes)=> void
  addOng : (ong:OngsTypes)=> void
  denunciaList : DenunciaTypes[]
  ongsList : OngsTypes[]
  usersList : UserTypes[]
  addUser : (user:UserTypes)=> void
}

type DbContextProviderProps = {
  children: ReactNode
}

const medalList = [
    {name :"Embaixadora da comunidade",level : 1 , image : "teste"},
    {name :"Gaia",level : 2 , image : "teste3"},
    {name :"Iara",level : 3 , image : "teste3"}
  ]

const initialOng = [{
  
    name : "Amigos do Rio Vermelho",
    description : "Salve o Rio das Mariquitas",
    meta : 35000 ,
    valorAtual : 15000,
    image : "https://s3.amazonaws.com/hub-central/uploads/1497361271_meuriocor.png"
},
{
  
  name : "Baia Azul",
  description : "Ajude os rios de itapagipe",
  meta : 15000 ,
  valorAtual : 13697,
  image : "https://www.mbi.com.br/mbi/files/media/image/simbolopedia/municipio-itapagipe-brasao-simb-brsemg0502133402.jpg"
}

]

const initialUsers = [{
  id : 1,
  name : "Guto Marcelo",
  description : "Vegano ",
  xp : 380,
  medals : [medalList[0],medalList[1]],
  image : "foto"
},
{
  id: 2 ,
  name : "Victoria Neves",
  description : "Plante sementes de felicidade",
  medals : [medalList[2]],
  xp : 125,
  image : "https://static.vecteezy.com/system/resources/thumbnails/004/800/431/small/young-black-woman-smiling-and-looking-at-camera-in-kitchen-free-photo.jpg"
},
{
  id : 3,
  name : "Pedro Santos",
  description : "Lorem Ipsolum",
  medals : [medalList[1]],
  xp: 240,
  image : "foto"
},
{
  id : 4,
  name : "Maria Sampaio",
  description : "Lorem Ipsolum 4",
  medals : [medalList[0], medalList[2]],
  xp: 355,
  image : "foto"
}
]


const initialDenuncias = [
  {
    username : "anonimo",
    category : "Despejo inregular - Dique do Tororó",
    location : [-12.983578,-38.505020],
    eventDate : "22/08/2022",
    image : "https://falario.com.br/wp-content/uploads/2019/03/2-Valoes-abandonados-em-SG-Rio-California-com-vari_00057833_0.jpg",
    cratedAt : "22/08/2022",
    region: "Salvador - Brotas"
  },
  {
    username : "Jamile",
    category : "Lixo em uma antiga nascente - Fonte da Água Brusca",
    location : [-12.9612607,-38.5022631],
    eventDate : "22/08/2022",
    image : "http://www.ipatrimonio.org/wp-content/uploads/2018/01/Salvador-Fonte-da-%C3%81gua-Brusca-Imagem-Sipac.jpg",
    cratedAt : "24/08/2022",
    region: "Salvador - Centro"
  }
]

export const DbContext = createContext({} as DbContextType)

export function DbContextProvider(props: DbContextProviderProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [denunciaList, setDenunciaList] = useState<DenunciaTypes[]>(initialDenuncias)
  const [ongsList, setOngsList] = useState<OngsTypes[]>(initialOng)
  const [usersList , setUsersList] = useState<UserTypes[]>(initialUsers)
  const addDenuncia = (denuncia:DenunciaTypes)=>{
    setDenunciaList(denunciaList.concat(denuncia))
  }
  const addOng = (ong:OngsTypes)=>{
    setOngsList(ongsList.concat(ong))
  }

  const addUser = (user:UserTypes)=> {
    setUsersList(usersList.concat(user))
  }

  return (
    <DbContext.Provider value={{ addDenuncia, addOng , addUser, usersList  , denunciaList ,ongsList}}>
      {props.children}
    </DbContext.Provider>
  )
}
