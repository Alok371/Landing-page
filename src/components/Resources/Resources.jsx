import React from 'react';

const Resources = () => {
    const resources = [
        {
            title: 'Document 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit felis a odio tempus, nec lacinia quam ultrices.',
            link: 'https://example.com/document1.pdf',
            type: 'Document',
        },
        {
            title: 'Video Tutorial',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
            link: 'https://www.youtube.com/watch?v=VIDEO_ID',
            type: 'Video',
        },
        {
            title: 'Sample Code Repository',
            description: 'Check out our sample code repository for examples and demos.',
            link: 'https://github.com/your-company/sample-code',
            type: 'Code',
        },
        {
            title: 'Whitepaper: Emerging Technologies',
            description: 'Learn about the latest trends and advancements in emerging technologies.',
            link: 'https://example.com/whitepaper.pdf',
            type: 'Whitepaper',
        },
        {
            title: 'Webinar Series',
            description: 'Join our webinar series to explore various topics related to our industry.',
            link: 'https://example.com/webinar',
            type: 'Webinar',
        },
        {
            title: 'Webinar Series',
            description: 'Join our webinar series to explore various topics related to our industry.',
            link: 'https://example.com/webinar',
            type: 'Webinar',
        },
    ];

    return (
        <div className="min-h-screen text-teal-900">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-12 text-center">Company Resources</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {resources.map((resource, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-xl shadow-teal-500 p-6">
                            <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
                            <p className="text-black mb-4">{resource.description}</p>
                            <span className="inline-block bg-black text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">{resource.type}</span>
                            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 px-3 hover:underline">View Resource</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Resources;
