// 主JavaScript文件

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化导航栏
    initNavigation();
    
    // 加载各页面内容
    loadNewsContent();
    loadAnnouncementsContent();
    loadProductsContent();
    loadMembersContent();
    
    // 初始化联系方式点击事件
    initContactItems();
    
    // 初始化产品详情页返回按钮
    document.getElementById('back-to-products').addEventListener('click', function() {
        document.getElementById('product-detail').style.display = 'none';
        document.getElementById('products').classList.add('active');
    });
});

// 初始化导航栏
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 隐藏产品详情页
            document.getElementById('product-detail').style.display = 'none';
            
            // 移除所有导航链接的active类
            navLinks.forEach(l => l.classList.remove('active'));
            
            // 添加当前链接的active类
            this.classList.add('active');
            
            // 获取目标section的id
            const targetId = this.getAttribute('href').substring(1);
            
            // 隐藏所有section
            sections.forEach(section => section.classList.remove('active'));
            
            // 显示目标section
            document.getElementById(targetId).classList.add('active');
        });
    });
}

// 加载最新消息内容
function loadNewsContent() {
    const newsContainer = document.getElementById('news-container');
    
    newsData.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';
        newsItem.setAttribute('data-id', news.id);
        
        newsItem.innerHTML = `
            <h3 class="news-title">${news.title}</h3>
            <div class="news-meta">
                <span class="news-publisher">发布者: ${news.publisher}</span> | 
                <span class="news-date">发布时间: ${news.date}</span>
            </div>
        `;
        
        newsItem.addEventListener('click', function() {
            showDetailModal('新闻详情', `
                <h3>${news.title}</h3>
                <p>发布者: ${news.publisher}</p>
                <p>发布时间: ${news.date}</p>
                <div class="mt-4">${news.content}</div>
            `);
        });
        
        newsContainer.appendChild(newsItem);
    });
}

// 加载官方公告内容
function loadAnnouncementsContent() {
    const announcementsContainer = document.getElementById('announcements-container');
    
    announcementsData.forEach(announcement => {
        const announcementItem = document.createElement('div');
        announcementItem.className = 'announcement-item';
        announcementItem.setAttribute('data-id', announcement.id);
        
        announcementItem.innerHTML = `
            <h3 class="announcement-title">${announcement.title}</h3>
            <div class="announcement-meta">
                <span class="announcement-publisher">发布者: ${announcement.publisher}</span> | 
                <span class="announcement-date">发布时间: ${announcement.date}</span>
            </div>
        `;
        
        announcementItem.addEventListener('click', function() {
            showDetailModal('公告详情', `
                <h3>${announcement.title}</h3>
                <p>发布者: ${announcement.publisher}</p>
                <p>发布时间: ${announcement.date}</p>
                <div class="mt-4">${announcement.content}</div>
            `);
        });
        
        announcementsContainer.appendChild(announcementItem);
    });
}

// 加载产品展示内容
function loadProductsContent() {
    const productsContainer = document.getElementById('products-container');
    
    productsData.forEach(product => {
        const productCol = document.createElement('div');
        productCol.className = 'col-md-6 col-lg-3';
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-id', product.id);
        
        // 生成标签HTML
        let tagsHtml = '';
        if (product.tags && product.tags.length > 0) {
            tagsHtml = '<div class="product-tags">';
            product.tags.forEach(tag => {
                tagsHtml += `<span class="product-tag">${tag}</span>`;
            });
            tagsHtml += '</div>';
        }

        productCard.innerHTML = `
            <div class="product-image" style="background-image: url('${product.image}');"></div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-meta">
                    <span class="product-date">发布日期: ${product.date}</span> | 
                    <span class="product-publisher">发布者: ${product.publisher}</span>
                </div>
                ${tagsHtml}
                <p class="product-description">${product.brief}</p>
            </div>
        `;
        
        productCard.addEventListener('click', function() {
            showProductDetail(product.id);
        });
        
        productCol.appendChild(productCard);
        productsContainer.appendChild(productCol);
    });
}

// 显示产品详情
function showProductDetail(productId) {
    const product = productsData.find(p => p.id === productId);
    
    if (product) {
        // 隐藏产品列表页面
        document.getElementById('products').classList.remove('active');
        
        // 更新产品详情页内容
        document.getElementById('product-detail-image').src = product.image;
        document.getElementById('product-detail-title').textContent = product.name;
        // 生成标签HTML
        let tagsHtml = '';
        if (product.tags && product.tags.length > 0) {
            tagsHtml = '<div class="product-detail-tags">';
            product.tags.forEach(tag => {
                tagsHtml += `<span class="product-tag">${tag}</span>`;
            });
            tagsHtml += '</div>';
        }

        document.getElementById('product-detail-meta').innerHTML = `
            <span class="product-date">发布日期: ${product.date}</span> | 
            <span class="product-publisher">发布者: ${product.publisher}</span>
            ${tagsHtml}
        `;
        document.getElementById('product-detail-description').innerHTML = product.description;
        
        // 更新下载和使用链接
        const downloadLink = document.getElementById('product-download-link');
        const useLink = document.getElementById('product-use-link');
        
        if (product.downloadLink) {
            downloadLink.href = product.downloadLink;
            downloadLink.style.display = 'inline-block';
        } else {
            downloadLink.style.display = 'none';
        }
        
        if (product.useLink) {
            useLink.href = product.useLink;
            useLink.style.display = 'inline-block';
        } else {
            useLink.style.display = 'none';
        }
        
        // 显示产品详情页
        document.getElementById('product-detail').style.display = 'block';
    }
}

// 加载人员名单内容
function loadMembersContent() {
    const membersContainer = document.getElementById('members-container');
    
    membersData.forEach(member => {
        const memberCol = document.createElement('div');
        memberCol.className = 'col-md-6 col-lg-4';
        
        const memberCard = document.createElement('div');
        memberCard.className = `member-card ${member.statusClass}`;
        memberCard.setAttribute('data-id', member.id);
        
        memberCard.innerHTML = `
            <h3 class="member-name">${member.name}</h3>
            <div class="member-info">
                <div class="member-status ${member.statusClass}">${member.status}</div>
                <div class="member-level ${member.levelClass}">${member.level}</div>
            </div>
            <div class="member-position">${member.position}</div>
            <div class="member-meta">
                <div>加入日期: ${member.joinDate}</div>
                <div>加入方式: ${member.joinMethod}</div>
            </div>
            <p class="member-brief mt-3">${member.brief}</p>
        `;
        
        memberCard.addEventListener('click', function() {
            showDetailModal('成员详情', `
                <h3>${member.name}</h3>
                <div class="member-detail-info">
                    <div class="member-status ${member.statusClass}">${member.status}</div>
                    <div class="member-level ${member.levelClass}">${member.level}</div>
                </div>
                <p class="member-detail-position">职务: ${member.position}</p>
                <p>加入日期: ${member.joinDate}</p>
                <p>加入方式: ${member.joinMethod}</p>
                <div class="mt-4">${member.detail}</div>
            `);
        });
        
        memberCol.appendChild(memberCard);
        membersContainer.appendChild(memberCol);
    });
}

// 初始化联系方式点击事件
function initContactItems() {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            let title = '';
            let content = '';
            
            switch (type) {
                case 'wechat':
                    title = '微信公众号';
                    content = `
                        <div class="text-center">
                            <img src="images/wechat-qr.jpg" alt="微信公众号二维码" class="img-fluid mb-3" style="max-width: 200px;">
                            <p>扫描上方二维码或搜索「梦笔笙花工作室」关注我们的公众号</p>
                        </div>
                    `;
                    break;
                case 'qq-group':
                    title = 'QQ群';
                    content = `
                        <div class="text-center">
                            <img src="images/qq-group-qr.jpg" alt="QQ群二维码" class="img-fluid mb-3" style="max-width: 200px;">
                            <p>群号：941211599</p>
                            <p>扫描二维码或点击<a href="https://qm.qq.com/cgi-bin/qm/qr?k=941211599" target="_blank">这里</a>加入我们的QQ群</p>
                        </div>
                    `;
                    break;
                case 'qq-channel':
                    title = 'QQ频道';
                    content = `
                        <div class="text-center">
                            <img src="images/qq-channel-qr.jpg" alt="QQ频道二维码" class="img-fluid mb-3" style="max-width: 200px;">
                            <p>频道ID：mbshworkshop</p>
                            <p>扫描二维码或点击<a href="https://qun.qq.com/qqweb/qunpro/share?_wv=3&_wwv=128&inviteCode=mbshworkshop" target="_blank">这里</a>加入我们的QQ频道</p>
                        </div>
                    `;
                    break;
                case 'email':
                    title = '电子邮件';
                    content = `
                        <div class="text-center">
                            <i class="bi bi-envelope-fill fs-1 mb-3 text-warning"></i>
                            <p>联系邮箱：mbshworkshop@163.com</p>
                            <p>技术支持：mengbishenghua2024@163.com</p>
                            <p>商务合作：w2651436021@163.com</p>
                        </div>
                    `;
                    break;
            }
            
            showDetailModal(title, content);
        });
    });
}

// 显示详情模态窗口
function showDetailModal(title, content) {
    const modal = new bootstrap.Modal(document.getElementById('detailModal'));
    document.getElementById('detailModalLabel').textContent = title;
    document.getElementById('detailModalBody').innerHTML = content;
    modal.show();
}
