// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Flex({children}: any) {
    return (
        <div className="flex">
            {children}
        </div>
    )
}