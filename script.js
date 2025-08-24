// Portfolio data
const portfolioData = [
    {
        category: 'short-form',
        title: 'Instagram Reel - Fashion Brand',
        description: 'Fast-paced editing with dynamic transitions for a fashion brand\'s social media campaign',
        image: 'https://placehold.co/600x400/2563eb/ffffff?text=Short+Form+Video',
        video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
        category: 'long-form',
        title: 'Documentary Style - Travel Vlog',
        description: 'Cinematic storytelling with professional color grading and smooth pacing',
        image: 'https://placehold.co/600x400/f97316/ffffff?text=Long+Form+Video',
        video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
        category: 'gaming',
        title: 'Gaming Montage - FPS Highlights',
        description: 'High-energy editing with sync-to-beat effects and dynamic text animations',
        image: 'https://placehold.co/600x400/10b981/ffffff?text=Gaming+Video',
        video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
        category: 'football',
        title: 'Football Skills Compilation',
        description: 'Smooth transitions between plays with highlight-reel worthy moments',
        image: 'https://placehold.co/600x400/ef4444/ffffff?text=Football+Edits',
        video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
        category: 'ecommerce',
        title: 'Product Showcase - Tech Gadgets',
        description: 'Clean, professional product demonstrations with call-to-action overlays',
        image: 'https://placehold.co/600x400/8b5cf6/ffffff?text=eCommerce+Ads',
        video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
        category: 'documentary',
        title: 'Corporate Documentary',
        description: 'Professional interview style with b-roll integration and subtle motion graphics',
        image: 'https://placehold.co/600x400/06b6d4/ffffff?text=Documentary',
        video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
        category: 'color-grading',
        title: 'Cinematic Color Transformation',
        description: 'Before and after showcase of professional color grading techniques',
        image: 'https://placehold.co/600x400/f59e0b/ffffff?text=Color+Grading',
        video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
        category: 'anime',
        title: 'Anime AMV - Action Sequence',
        description: 'Sync-to-music editing with dramatic effects and seamless transitions',
        image: 'https://placehold.co/600x400/ec4899/ffffff?text=Anime+Videos',
        video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
        category: 'ads',
        title: 'Brand Commercial - 30 Second Spot',
        description: 'Professional commercial editing with product focus and brand messaging',
        image: 'https://placehold.co/600x400/3b82f6/ffffff?text=Ads',
        video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
        category: 'short-form',
        title: 'TikTok Campaign - Food Brand',
        description: 'Trend-focused editing with viral potential and engaging hooks',
        image: 'https://placehold.co/600x400/22c55e/ffffff?text=Social+Media+Ads',
        video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
        category: 'long-form',
        title: 'YouTube Tutorial Series',
        description: 'Educational content with clear pacing and informative graphics',
        image: 'https://placehold.co/600x400/84cc16/ffffff?text=Tutorial+Series',
        video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    },
    {
        category: 'gaming',
        title: 'Stream Highlights Package',
        description: 'Best moments compilation with chat integration and streamer branding',
        image: 'https://placehold.co/600x400/a855f7/ffffff?text=Stream+Highlights',
        video: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4'
    }
];

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenuBtn.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    let activeFilter = 'all';

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            activeFilter = this.dataset.filter;
            filterPortfolio();
        });
    });

    // Modal functionality
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    const modalClose = document.getElementById('modal-close');

    // Close modal function
    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
        // Stop video playback
        const video = modalVideo.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize portfolio
    setTimeout(() => {
        renderPortfolioItems(portfolioData);
    }, 1000);

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'var(--shadow)';
        }
    });

    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    // Initialize lazy loading
    lazyLoadImages();
});

// Render portfolio items
function renderPortfolioItems(items) {
    const portfolioGrid = document.getElementById('portfolio-grid');
    portfolioGrid.innerHTML = '';

    items.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `portfolio-item ${item.category}`;
        portfolioItem.dataset.category = item.category;
        
        portfolioItem.innerHTML = `
            <div class="portfolio-image">
                <img src="${item.image}" alt="${item.title} - ${item.description}" onerror="this.src='https://placehold.co/600x400/64748b/ffffff?text=Video+Preview'">
                <div class="portfolio-overlay">
                    <div class="portfolio-info">
                        <span class="portfolio-category">${item.category.replace('-', ' ')}</span>
                        <h3 class="portfolio-title">${item.title}</h3>
                        <p class="portfolio-description">${item.description}</p>
                    </div>
                </div>
                <div class="play-icon">
                    <i class="fas fa-play"></i>
                </div>
            </div>
        `;

        portfolioItem.addEventListener('click', () => openModal(item));
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Filter portfolio
function filterPortfolio() {
    const filteredItems = activeFilter === 'all' 
        ? portfolioData 
        : portfolioData.filter(item => item.category === activeFilter);
    
    renderPortfolioItems(filteredItems);
}

// Open modal with video
let activeFilter = 'all';

function openModal(item) {
    const modal = document.getElementById('video-modal');
    const modalVideo = document.getElementById('modal-video');
    
    modalVideo.innerHTML = `
        <video controls autoplay>
            <source src="${item.video}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img');
    const config = {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0.01
    };

    let observer = new IntersectionObserver(function(entries, self) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                preloadImage(entry.target);
                self.unobserve(entry.target);
            }
        });
    }, config);

    images.forEach(image => {
        observer.observe(image);
    });
}

function preloadImage(img) {
    const src = img.getAttribute('src');
    if (!src) return;
    img.src = src;
}
