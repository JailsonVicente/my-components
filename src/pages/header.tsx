import ToggleMenu from "@/components/header/ToggleMenu";

export default function PaginaHeader(){
    return(
        <div className={`
            flex items-center justify-between
            bg-zinc-700 h-16 px-5 relative
        `}>
            <div className={`
                flex items-center justify-center
                w-12 h-12 bg-black rounded-full
                text-sm leading-none
            `}>Logo</div>
            <ToggleMenu />
        </div>
    )
}