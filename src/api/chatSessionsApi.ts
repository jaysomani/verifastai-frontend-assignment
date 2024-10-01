export const fetchChatSessions = async (page: number) => {
    const response = await fetch(`https://admin-backend-docker-india-306034828043.asia-south2.run.app/nlp/api/chat_sessions?page=${page}&per_page=10`);
    const data = await response.json();
    return data.chat_sessions;
};
