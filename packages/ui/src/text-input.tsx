interface PropType {
    placeholder: string;
    size?: "sm" | "md";
}

export function TextInput({placeholder, size}: PropType) {
    return <input className={`${size === "sm" ? "p-2 m-2" : "p-3 m-3"} border border-gray-300 border-1 rounded`}
    placeholder={placeholder}

    type="text" />;
} 