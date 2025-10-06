// 状态栏配置示例 - 基于提供的StatusBar_Setting
// 这个文件展示了如何根据原始设置来配置状态栏数据

// 原始设置映射
const statusBarConfig = {
    uid: "statusbar_core_display",
    trigger: {
        title: "核心状态栏",
        keywords: ["状态栏", "UI", "界面显示"]
    },
    
    // 数据模板 - 对应原始content中的变量
    dataTemplate: {
        // 人物状态部分
        character: {
            姓名: "{{姓名}}",
            当前气血: "{{当前气血}}",
            最大气血: "{{最大气血}}",
            当前内力: "{{当前内力}}",
            最大内力: "{{最大内力}}",
            境界: "{{境界}}"
        },
        
        // 名声部分
        reputation: {
            阵营: "{{阵营}}",
            声望等级: "{{声望等级}}",
            称号: "{{称号}}"
        },
        
        // 行囊部分
        inventory: {
            盘缠: "{{盘缠}}",
            兵刃: "{{兵刃}}",
            杂物列表: "{{杂物列表}}"
        },
        
        // 要事部分
        quests: {
            主线任务标题: "{{主线任务标题}}",
            主线任务描述: "{{主线任务描述}}",
            支线任务: "{{支线任务}}"
        }
    }
};

// 示例数据集 - 可以根据实际游戏数据替换
const exampleDataSets = {
    // 新手角色
    newbie: {
        姓名: "江小白",
        当前气血: 100,
        最大气血: 100,
        当前内力: 50,
        最大内力: 50,
        境界: "练气初期",
        阵营: "无门无派",
        声望等级: "无名小卒",
        称号: "初出茅庐",
        盘缠: "50 两",
        兵刃: "木剑",
        杂物列表: ["干粮 x3", "草药 x1"],
        主线任务标题: "拜师学艺",
        主线任务描述: "寻找一位武林高手作为师父，开始修炼之路。",
        支线任务: "帮助村民赶走野狼"
    },
    
    // 中级角色
    intermediate: {
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
    },
    
    // 高级角色
    advanced: {
        姓名: "张无忌",
        当前气血: 2800,
        最大气血: 3000,
        当前内力: 2500,
        最大内力: 3000,
        境界: "金丹大成",
        阵营: "明教",
        声望等级: "武林宗师",
        称号: "明教教主",
        盘缠: "50,000 两",
        兵刃: "倚天剑",
        杂物列表: ["九阳神功 x1", "乾坤大挪移 x1", "太极拳谱 x1", "圣火令 x6", "大还丹 x10"],
        主线任务标题: "统一武林",
        主线任务描述: "集结各路英雄，对抗元朝暴政，重建中原武林秩序。",
        支线任务: "寻找失散的义父谢逊"
    }
};

// 数据加载函数
function loadStatusBarData(characterType = 'intermediate') {
    if (!exampleDataSets[characterType]) {
        console.error(`角色类型 "${characterType}" 不存在`);
        return;
    }
    
    const data = exampleDataSets[characterType];
    
    if (window.statusBarManager) {
        window.statusBarManager.updateMultipleData(data);
        console.log(`已加载 ${characterType} 角色数据:`, data.姓名);
    } else {
        console.error('状态栏管理器未初始化');
    }
}

// 随机数据生成器
function generateRandomData() {
    const names = ["李逍遥", "赵灵儿", "林月如", "阿奴", "酒剑仙"];
    const realms = ["练气初期", "练气中期", "练气后期", "筑基初期", "筑基中期", "筑基后期", "金丹初期", "金丹中期", "金丹大成"];
    const factions = ["正道", "魔教", "中立", "隐世门派"];
    const titles = ["初出茅庐", "江湖新秀", "小有名气", "声名鹊起", "武林高手", "一代宗师"];
    const weapons = ["木剑", "铁剑", "青钢剑", "宝剑", "神兵", "倚天剑"];
    
    const randomData = {
        姓名: names[Math.floor(Math.random() * names.length)],
        当前气血: Math.floor(Math.random() * 2000) + 100,
        最大气血: 2000,
        当前内力: Math.floor(Math.random() * 1500) + 50,
        最大内力: 1500,
        境界: realms[Math.floor(Math.random() * realms.length)],
        阵营: factions[Math.floor(Math.random() * factions.length)],
        声望等级: titles[Math.floor(Math.random() * titles.length)],
        称号: titles[Math.floor(Math.random() * titles.length)],
        盘缠: `${Math.floor(Math.random() * 10000) + 100} 两`,
        兵刃: weapons[Math.floor(Math.random() * weapons.length)],
        杂物列表: ["随机物品 x" + (Math.floor(Math.random() * 5) + 1)],
        主线任务标题: "随机生成的主线任务",
        主线任务描述: "这是一个随机生成的任务描述，用于测试显示效果。",
        支线任务: "随机支线任务"
    };
    
    if (window.statusBarManager) {
        window.statusBarManager.updateMultipleData(randomData);
        console.log('已生成随机数据:', randomData.姓名);
    }
}

// 导出配置和函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        statusBarConfig,
        exampleDataSets,
        loadStatusBarData,
        generateRandomData
    };
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 添加快捷键支持
    document.addEventListener('keydown', function(e) {
        if (e.altKey) {
            switch(e.key) {
                case '1':
                    loadStatusBarData('newbie');
                    break;
                case '2':
                    loadStatusBarData('intermediate');
                    break;
                case '3':
                    loadStatusBarData('advanced');
                    break;
                case 'r':
                    generateRandomData();
                    break;
            }
        }
    });
    
    console.log('配置文件已加载！');
    console.log('快捷键说明:');
    console.log('Alt+1: 加载新手角色数据');
    console.log('Alt+2: 加载中级角色数据');
    console.log('Alt+3: 加载高级角色数据');
    console.log('Alt+R: 生成随机数据');
});