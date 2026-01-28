export function useVoiceInput(setText) {
	return () => {
		const SpeechRecognition =
			window.SpeechRecognition || window.webkitSpeechRecognition

		if (!SpeechRecognition) {
			alert('Голосовой ввод не поддерживается')
			return
		}

		const recognition = new SpeechRecognition()
		recognition.lang = 'ru-RU'

		recognition.onresult = e => {
			setText(e.results[0][0].transcript)
		}

		recognition.start()
	}
}
