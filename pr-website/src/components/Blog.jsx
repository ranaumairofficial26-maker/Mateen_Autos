import '../styles/Sections2.css';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of PR in the Age of AI: Navigating New Media Landscapes',
    excerpt: 'Artificial intelligence is reshaping how PR professionals craft narratives, reach audiences, and measure impact. Here\'s what you need to know to stay ahead.',
    category: 'Industry Trends',
    date: 'Mar 15, 2025',
    readTime: '8 min read',
    author: { name: 'Sarah Mitchell', initial: 'S' },
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
  },
  {
    id: 2,
    title: 'Crisis Communications: 5 Rules Every Brand Must Follow',
    excerpt: 'When a PR crisis hits, your first 48 hours determine everything. These five rules separate brands that recover from those that collapse.',
    category: 'Crisis PR',
    date: 'Mar 8, 2025',
    readTime: '6 min read',
    author: { name: 'Alex Porter', initial: 'A' },
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80',
  },
  {
    id: 3,
    title: 'Building a Personal Brand: From Zero to Thought Leader',
    excerpt: 'How executives and entrepreneurs can leverage media relations to establish themselves as the go-to experts in their field.',
    category: 'Personal Branding',
    date: 'Feb 28, 2025',
    readTime: '5 min read',
    author: { name: 'Maria Chen', initial: 'M' },
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
];

export default function Blog() {
  return (
    <section className="blog section" id="blog">
      <div className="container">
        <div className="blog-header">
          <div>
            <div className="section-label">Insights</div>
            <h2 className="section-title">PR Intelligence</h2>
          </div>
          <a href="#blog" className="btn btn-outline-gold">
            View All Articles →
          </a>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.id} id={`blog-post-${post.id}`}>
              <div className="blog-card-image-wrap">
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-card-image"
                />
              </div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span className="blog-card-category">{post.category}</span>
                  <span className="blog-card-date">{post.date}</span>
                  <span className="blog-card-read-time">{post.readTime}</span>
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <div className="blog-card-author">
                    <div className="blog-card-author-avatar">{post.author.initial}</div>
                    <span className="blog-card-author-name">{post.author.name}</span>
                  </div>
                  <div className="blog-card-arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
