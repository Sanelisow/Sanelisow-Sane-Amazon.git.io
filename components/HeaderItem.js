
function HeaderItem({Icon, title}) {
return (

        <div className="flex flex-col items-center cursor-pointer group 
            w-12 sm:w-20 hover:text-white">
            <Icon className="h-6 mb-1 group-hover:animate-bounce" />
                <p className="text-xs opacity-100 group-hover:opacity-100 
                tracking-widest truncate max-w-md">
                    {title}
                    </p>
                   
        </div>
    );
}
export default HeaderItem;