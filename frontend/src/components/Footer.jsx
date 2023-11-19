function Footer() {
    const handleClick = () => {
        window.open('https://www.seeds.cm')
    }
    return (
        <div className="absolute bottom-1 italic right-6 text-grey ">
            <span>
                Powered by{' '}
                <span
                    onClick={handleClick}
                    className="text-blue not-italic hover:text-[#4c1d95] font-medium cursor-pointer"
                >
                    SEED
                </span>
            </span>
        </div>
    )
}

export default Footer
