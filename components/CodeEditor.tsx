"use client";

import Editor from "@monaco-editor/react";

export default function CodeEditor() {
    return (
        <Editor
            height="100%"
            width="100%"
            defaultLanguage="cpp"
            theme="vs-dark"
            options={{
                minimap: { enabled: false }, // Cleaner look
                fontSize: 14,
                padding: { top: 16 },
                lineNumbers: "on",
                scrollBeyondLastLine: false,
                automaticLayout: true,
            }}
        />
    );
}