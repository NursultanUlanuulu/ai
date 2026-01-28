import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function Markdown({ children }) {
	return (
		<ReactMarkdown
			components={{
				code({ inline, className, children, ...props }) {
					const match = /language-(\w+)/.exec(className || '')
					return !inline && match ? (
						<SyntaxHighlighter
							language={match[1]}
							style={vscDarkPlus}
							{...props}
						>
							{String(children).replace(/\n$/, '')}
						</SyntaxHighlighter>
					) : (
						<code className={className} {...props}>
							{children}
						</code>
					)
				},
			}}
		>
			{children}
		</ReactMarkdown>
	)
}
