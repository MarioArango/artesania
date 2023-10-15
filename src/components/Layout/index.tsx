import { IChildren } from "@/interfaces/IChildren"
import Header from "./header"
import './index.css'


export default function Layout({ children } : IChildren): JSX.Element{
    return (
        <>
            <Header/>
            <main className='main-container'>
                {children}
            </main>
        </>
    )
}