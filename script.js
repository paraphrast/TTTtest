// 状态栏数据管理
class StatusBarManager {
    constructor() {
        this.data = {
            姓名: "李逍遥",
            当前气血: 850,
            最大气血: 1000,
            当前内力: 600,
            最大内力: 1000,
            境界: "筑基中期",
            阵营: "正道",
            声望等级: "江湖新秀",
            称号: "剑心通明",
            盘缠: "2,350 两",
            兵刃: "青钢剑",
            杂物列表: ["回春丹 x3", "千年人参 x1", "武功秘籍 x2", "银票 x5"],
            主线任务标题: "寻找失踪的师父",
            主线任务描述: "师父三日前外出采药，至今未归。据村民所言，曾见师父往西山方向而去，恐有不测。",
            支线任务: "帮助村民找回丢失的牛羊"
        };
        
        this.init();
    }
    
    init() {
        this.updateDisplay();
        this.addEventListeners();
        this.startAnimations();
    }
    
    // 更新显示内容
    updateDisplay() {
        // 更新基本信息
        document.getElementById('name').textContent = this.data.姓名;
        document.getElementById('realm').textContent = this.data.境界;
        document.getElementById('faction').textContent = this.data.阵营;
        document.getElementById('reputation').textContent = this.data.声望等级;
        document.getElementById('title').textContent = this.data.称号;
        document.getElementById('money').textContent = this.data.盘缠;
        document.getElementById('weapon').textContent = this.data.兵刃;
        
        // 更新气血和内力
        this.updateHealthBar();
        this.updateManaBar();
        
        // 更新物品列表
        this.updateItemsList();
        
        // 更新任务信息
        document.getElementById('main-quest-title').textContent = this.data.主线任务标题;
        document.getElementById('main-quest-desc').textContent = this.data.主线任务描述;
        document.getElementById('side-quest').textContent = this.data.支线任务;
    }
    
    // 更新气血条
    updateHealthBar() {
        const percentage = (this.data.当前气血 / this.data.最大气血) * 100;
        const hpFill = document.querySelector('.hp-fill');
        const hpValue = document.querySelector('.progress-bar .value');
        
        hpFill.style.width = percentage + '%';
        hpValue.textContent = `${this.data.当前气血}/${this.data.最大气血}`;
        
        // 根据血量变化颜色
        if (percentage > 70) {
            hpFill.style.background = 'linear-gradient(to right, #ff6b6b, #ff8e8e)';
        } else if (percentage > 30) {
            hpFill.style.background = 'linear-gradient(to right, #ffa500, #ffb347)';
        } else {
            hpFill.style.background = 'linear-gradient(to right, #dc143c, #ff6347)';
        }
    }
    
    // 更新内力条
    updateManaBar() {
        const percentage = (this.data.当前内力 / this.data.最大内力) * 100;
        const mpFill = document.querySelector('.mp-fill');
        const mpValue = document.querySelectorAll('.progress-bar .value')[1];
        
        mpFill.style.width = percentage + '%';
        mpValue.textContent = `${this.data.当前内力}/${this.data.最大内力}`;
    }
    
    // 更新物品列表
    updateItemsList() {
        const itemsContainer = document.getElementById('items');
        itemsContainer.innerHTML = '';
        
        this.data.杂物列表.forEach(item => {
            const itemElement = document.createElement('span');
            itemElement.className = 'item';
            itemElement.textContent = item;
            itemsContainer.appendChild(itemElement);
        });
    }
    
    // 添加事件监听器
    addEventListeners() {
        // 点击状态项时的动画效果
        document.querySelectorAll('.status-item').forEach(item => {
            item.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
        
        // 任务项点击效果
        document.querySelectorAll('.quest-item').forEach(item => {
            item.addEventListener('click', function() {
                this.classList.toggle('expanded');
            });
        });
    }
    
    // 启动动画效果
    startAnimations() {
        // 水墨背景动画
        this.animateInkSpots();
        
        // 进度条动画
        this.animateProgressBars();
        
        // 定期更新效果
        setInterval(() => {
            this.addRandomEffects();
        }, 5000);
    }
    
    // 水墨点动画
    animateInkSpots() {
        const spots = document.querySelectorAll('.ink-spot');
        spots.forEach((spot, index) => {
            spot.style.animationDelay = `${index * 2}s`;
        });
    }
    
    // 进度条动画
    animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-fill');
        progressBars.forEach((bar, index) => {
            setTimeout(() => {
                bar.style.transition = 'width 2s ease-out';
                bar.style.width = bar.style.width || '0%';
            }, index * 500);
        });
    }
    
    // 随机效果
    addRandomEffects() {
        // 随机闪烁某个状态项
        const statusItems = document.querySelectorAll('.status-item');
        const randomItem = statusItems[Math.floor(Math.random() * statusItems.length)];
        
        randomItem.style.boxShadow = '0 0 15px rgba(139, 115, 85, 0.5)';
        setTimeout(() => {
            randomItem.style.boxShadow = '';
        }, 1000);
    }
    
    // 更新数据的公共方法
    updateData(key, value) {
        if (this.data.hasOwnProperty(key)) {
            this.data[key] = value;
            this.updateDisplay();
        }
    }
    
    // 批量更新数据
    updateMultipleData(dataObject) {
        Object.keys(dataObject).forEach(key => {
            if (this.data.hasOwnProperty(key)) {
                this.data[key] = dataObject[key];
            }
        });
        this.updateDisplay();
    }
    
    // 模拟数据变化（用于演示）
    simulateChanges() {
        setInterval(() => {
            // 模拟气血和内力的小幅变化
            const hpChange = Math.floor(Math.random() * 20) - 10;
            const mpChange = Math.floor(Math.random() * 30) - 15;
            
            this.data.当前气血 = Math.max(0, Math.min(this.data.最大气血, this.data.当前气血 + hpChange));
            this.data.当前内力 = Math.max(0, Math.min(this.data.最大内力, this.data.当前内力 + mpChange));
            
            this.updateHealthBar();
            this.updateManaBar();
        }, 3000);
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    const statusBar = new StatusBarManager();
    
    // 可选：启动模拟数据变化（用于演示效果）
    // statusBar.simulateChanges();
    
    // 将状态栏管理器暴露到全局，方便外部调用
    window.statusBarManager = statusBar;
    
    // 添加键盘快捷键
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'r') {
            e.preventDefault();
            statusBar.updateDisplay();
        }
    });
    
    // 添加页面可见性变化监听
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            statusBar.updateDisplay();
        }
    });
});

// 工具函数：格式化数字
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 工具函数：获取颜色根据百分比
function getColorByPercentage(percentage) {
    if (percentage > 70) return '#4CAF50';
    if (percentage > 30) return '#FF9800';
    return '#F44336';
}