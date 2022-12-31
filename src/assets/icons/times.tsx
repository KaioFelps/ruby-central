export function Times({size = 32}: {size?: number}) {
    return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.1152 11.694L21.7218 22.3006" stroke="currentcolor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M11.1152 22.3006L21.7218 11.694" stroke="currentcolor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    )
}