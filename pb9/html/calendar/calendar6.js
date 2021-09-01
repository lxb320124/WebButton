var adFtv = {};
var lmanac = {};
var chineseYear = "";
var currentDate = "";
var lichunDate = 0;
var lunarInfo = new Array(19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19415, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835);
var solarMonth = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
var Gan = new Array("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸");
var Zhi = new Array("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥");
var Animals = new Array("鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪");
var solarTerm = new Array("小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至", "头伏", "中伏", "末伏", "出伏");
var sTermInfo = new Array(0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758);
var nStr1 = new Array("日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
var nStr2 = new Array("初", "十", "廿", "卅", "□");
var shengxiaoStyle = {鼠: "rat",
	牛: "ox",
	虎: "tiger",
	兔: "rabbit",
	龙: "dragon",
	蛇: "snake",
	马: "horse",
	羊: "goat",
	猴: "monkey",
	鸡: "rooster",
	狗: "dog",
	猪: "boar"
};
var sFtv = new Array("0101*元旦 http://baike.baidu.com/view/3116.htm", "0214#情人节 http://baike.baidu.com/view/2533.htm", "0305 学雷锋日 http://baike.baidu.com/view/165596.htm", "0308#妇女节 http://baike.baidu.com/view/328605.htm", "0312#植树节 http://baike.baidu.com/view/21813.htm", "0314@白色情人节 http://baike.baidu.com/view/9083.htm", "0315 消费者权益日 http://baike.baidu.com/view/807967.htm", "0322 世界水日 http://baike.baidu.com/view/21371.htm", "0401#愚人节 http://baike.baidu.com/view/1710.htm", "0407 世界卫生日 http://baike.baidu.com/view/22478.htm", "0420@复活节 http://baike.baidu.com/view/1462.htm", "0422 地球日 http://baike.baidu.com/view/2183.htm", "0423 世界读书日 http://baike.baidu.com/view/23287.htm", "0501@劳动节 http://baike.baidu.com/view/44253.htm", "0504#青年节 http://baike.baidu.com/view/27635.htm", '0530@"五卅"运动纪念日 http://baike.baidu.com/view/2340194.htm', "0531 世界无烟日 http://baike.baidu.com/view/22249.htm", "0601@六一儿童节 http://baike.baidu.com/view/16194.htm", "0605 世界环境日 http://baike.baidu.com/view/22254.htm", "0606 全国爱眼日 http://baike.baidu.com/view/21347.htm", "0611 中国人口日 http://baike.baidu.com/view/58964.htm", "0701#中共建党日 http://baike.baidu.com/view/160972.htm", "0701#香港回归 http://baike.baidu.com/view/58870.htm", "0707@抗日战争纪念 http://baike.baidu.com/view/80378.htm", "0801@八一建军节 http://baike.baidu.com/view/27204.htm", "0812 国际青年日 http://baike.baidu.com/view/950303.htm", "0815 抗日战争胜利纪念日 http://baike.baidu.com/view/1387589.htm", "0910#教师节 http://baike.baidu.com/view/25833.htm", "0918@九·一八事变纪念日 http://baike.baidu.com/view/34028.htm", "0920 国际爱牙日 http://baike.baidu.com/view/147917.htm", "0921 国际和平日 http://baike.baidu.com/view/27269.htm", "0922 世界无车日 http://baike.baidu.com/view/489563.htm", "0927 世界旅游日 http://baike.baidu.com/view/59496.htm", "0930 烈士纪念日 http://baike.baidu.com/view/2325926.htm", "1001*国庆节 http://baike.baidu.com/view/14446.htm", "1010@辛亥革命纪念日 http://baike.baidu.com/view/59004.htm", "1031#万圣节 http://baike.baidu.com/view/2532.htm", "1110 世界青年节 http://baike.baidu.com/view/165356.htm", "1108 中国记者日 http://baike.baidu.com/view/45983.htm", "1111#光棍节 http://baike.baidu.com/view/23105.htm", "1116 国际宽容日 http://baike.baidu.com/view/614745.htm", "1117 国际大学生节 http://baike.baidu.com/view/165576.htm", "1120 世界儿童日 http://baike.baidu.com/view/27462.htm", "1201@世界艾滋病日 http://baike.baidu.com/view/28884.htm", "1203 国际残疾人日 http://baike.baidu.com/view/155500.htm", "1209@一二·九运动 http://baike.baidu.com/view/2055278.htm", "1210 世界人权日 http://baike.baidu.com/view/59173.htm", "1212 西安事变纪念日 http://baike.baidu.com/view/961033.htm", "1213@南京大屠杀纪念日 http://baike.baidu.com/view/22274.htm", "1220@澳门回归纪念日 http://baike.baidu.com/view/80418.htm", "1224#平安夜 http://baike.baidu.com/view/28259.htm", "1225#圣诞节 http://baike.baidu.com/view/2547.htm");
var lFtv = new Array("0101*春节 http://baike.baidu.com/view/3108.htm", "0115*元宵节 http://baike.baidu.com/view/1949.htm", "0408*佛诞 http://baike.baidu.com/view/240801.htm?fromId=93880", "0202*龙抬头 http://baike.baidu.com/view/26664.htm", "0303*上巳节 http://baike.baidu.com/view/105758.htm", "0505*端午节 http://baike.baidu.com/view/2567.htm", "0707*七夕 http://baike.baidu.com/view/8489.htm", "0715*中元节 http://baike.baidu.com/view/57902.htm", "0815*中秋节 http://baike.baidu.com/view/2568.htm", "0909*重阳节 http://baike.baidu.com/view/2572.htm", "1208*腊八节 http://baike.baidu.com/view/22439.htm", "1223*北方小年 http://baike.baidu.com/subview/15128/11122907.htm", "1224*南方小年 http://baike.baidu.com/subview/15128/11122907.htm", "0100*除夕 http://baike.baidu.com/view/2562.htm");
var wFtv = new Array("0520*母亲节 http://baike.baidu.com/view/2516.htm", "0630*父亲节 http://baike.baidu.com/view/8463.htm", "1144 感恩节 http://baike.baidu.com/view/2525.htm");
var fFtv2020 = new Array("0101 *","0119 _","0124 *","0125 *","0126 *","0127 *","0128 *","0129 *","0130 *","0201 _","0404 *","0405 *","0406 *","0426 _","0501 *","0502 *","0503 *","0504 *","0505 *","0509 _","0625 *","0626 *","0627 *","0628 _","0927 _","1001 *","1002 *","1003 *","1004 *","1005 *","1006 *","1007 *","1008 *","1010 _");
var fFtv2021 = new Array("0101 *","0102 *","0103 *","0207 _","0211 *","0212 *","0213 *","0214 *","0215 *","0216 *","0217 *","0220 _","0403 *","0404 *","0405 *","0425 _","0501 *","0502 *","0503 *","0504 *","0505 *","0508 _","0612 *","0613 *","0614 *","0918 _","0919 *","0920 *","0921 *","0926 _","1001 *","1002 *","1003 *","1004 *","1005 *","1006 *","1007 *","1009 _");
var jieqiUrl = {立春: "/jieqi/lichun.htm",
	雨水: "/jieqi/487.html",
	惊蛰: "/jieqi/493.html",
	春分: "/jieqi/504.html",
	清明: "/jieqi/512.html",
	谷雨: "/jieqi/529.html",
	立夏: "/jieqi/539.html",
	小满: "/jieqi/547.html",
	芒种: "/jieqi/555.html",
	夏至: "/jieqi/563.html",
	小暑: "/jieqi/571.html",
	大暑: "/jieqi/579.html",
	立秋: "/jieqi/587.html",
	处暑: "/jieqi/595.html",
	白露: "/jieqi/603.html",
	秋分: "/jieqi/611.html",
	寒露: "/jieqi/619.html",
	霜降: "/jieqi/627.html",
	立冬: "/jieqi/635.html",
	小雪: "/jieqi/521.html",
	大雪: "/jieqi/643.html",
	冬至: "/jieqi/651.html",
	小寒: "/jieqi/659.html",
	大寒: "/jieqi/667.html",
	头伏: "http://baike.baidu.com/view/700179.htm",
	中伏: "http://baike.baidu.com/view/704063.htm",
	末伏: "http://baike.baidu.com/view/2545583.htm",
	出伏: "http://baike.baidu.com/view/1529040.htm"
};

function shujiu(date) {
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var result = "";
	if (month == 12 || month == 1 || month == 2 || month == 3) {
		year = year.toString();
		var century = parseInt(year.substring(0, 2)) + 1;
		var c = "",
			d = 0.2422;
		if (century == 21) {
			c = 21.94
		} else {
			if (century == 20) {
				c = 22.6
			} else {
				return
			}
		}
		y = year.substring(2);
		var dongzhi = "";
		if (month == 12) {
			dongzhi = parseInt(y * d + c) - parseInt(y / 4)
		} else {
			dongzhi = parseInt((y - 1) * d + c) - parseInt((y - 1) / 4)
		}
		if (year == "1918" || year == "2021") {
			dongzhi = dongzhi - 1
		}
		year = parseInt(year);
		var feb_days = 28;
		if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
			feb_days = 29
		}
		var sj = new Array("12 " + (dongzhi) + " 12 " + (dongzhi + 8) + " 一九", "12 " + (dongzhi + 9) + " 1 " + (dongzhi + 17 - 31) + " 二九", "1 " + (dongzhi + 18 - 31) + " 1 " + (dongzhi + 26 - 31) + " 三九", "1 " + (dongzhi + 27 - 31) + " 1 " + (dongzhi + 35 - 31) + " 四九", "1 " + (dongzhi + 36 - 31) + " 2 " + (dongzhi + 44 - 62) + " 五九", "2 " + (dongzhi + 45 - 62) + " 2 " + (dongzhi + 53 - 62) + " 六九", "2 " + (dongzhi + 54 - 62) + " 2 " + (dongzhi + 62 - 62) + " 七九", "2 " + (dongzhi + 63 - 62) + " 3 " + (dongzhi + 71 - 62 - feb_days) + " 八九", "3 " + (dongzhi + 72 - 62 - feb_days) + " 3 " + (dongzhi + 80 - 62 - feb_days) + " 九九");
		var sj_days = new Array("九", "八", "七", "六", "五", "四", "三", "二", "一");
		for (var j in sj) {
			if (sj[j].match(/^(\d{1,2})\s+(\d{1,2})\s+(\d{1,2})\s+(\d{1,2})\s+(.*?)$/)) {
				if (month == Number(RegExp.$1) && month == Number(RegExp.$3) && day >= Number(RegExp.$2) && day <= Number(RegExp.$4)) {
					result = RegExp.$5 + "第" + sj_days[parseInt(RegExp.$4) - day] + "天"
				}
				if ((RegExp.$1 != RegExp.$3) && (month == RegExp.$1 && day >= RegExp.$2)) {
					result = RegExp.$5 + "第" + sj_days[8 - (day - RegExp.$2)] + "天"
				}
				if ((RegExp.$1 != RegExp.$3) && (month == RegExp.$3 && day <= RegExp.$4)) {
					result = RegExp.$5 + "第" + sj_days[parseInt(RegExp.$4) - day] + "天"
				}
			}
		}
	}
	if (year == 2018 && (month == 7 || month == 8)) {
		var sh_c = 19;
		var sf = new Array("7 12 7 21 头伏", "7 22 8 10 二伏", "8 11 8 20 三伏");
		var sf_days20 = new Array("二十", "十九", "十八", "十七", "十六", "十五", "十四", "十三", "十二", "十一", "十", "九", "八", "七", "六", "五", "四", "三", "二", "一");
		var sf_days = new Array("十", "九", "八", "七", "六", "五", "四", "三", "二", "一");
		for (var j in sf) {
			if (sf[j].match(/^(\d{1})\s+(\d{1,2})\s+(\d{1})\s+(\d{1,2})\s+(.*?)$/)) {
				if (month == Number(RegExp.$1) && month == Number(RegExp.$3) && day >= Number(RegExp.$2) && day <= Number(RegExp.$4)) {
					result = RegExp.$5 + "第" + sf_days[parseInt(parseInt(RegExp.$4) - day)] + "天"
				}
				if ((RegExp.$1 != RegExp.$3) && (month == RegExp.$1 && day >= RegExp.$2)) {
					if (sh_c == 19 && RegExp.$5 == "二伏") {
						result = RegExp.$5 + "第" + sf_days20[sh_c - (day - RegExp.$2)] + "天"
					} else {
						result = RegExp.$5 + "第" + sf_days[9 - (day - RegExp.$2)] + "天"
					}
				}
				if ((RegExp.$1 != RegExp.$3) && (month == RegExp.$3 && day <= RegExp.$4)) {
					if (sh_c == 19 && RegExp.$5 == "二伏") {
						result = RegExp.$5 + "第" + sf_days20[parseInt(RegExp.$4) - day] + "天"
					} else {
						result = RegExp.$5 + "第" + sf_days[parseInt(RegExp.$4) - day] + "天"
					}
				}
			}
		}
	}
	return result
}
function lYearDays(c) {
	var a, b = 348;
	for (a = 32768; a > 8; a >>= 1) {
		b += (lunarInfo[c - 1900] & a) ? 1 : 0
	}
	return (b + leapDays(c))
}
function leapDays(a) {
	if (leapMonth(a)) {
		return ((lunarInfo[a - 1900] & 65536) ? 30 : 29)
	} else {
		return (0)
	}
}
function leapMonth(a) {
	return (lunarInfo[a - 1900] & 15)
}
function monthDays(b, a) {
	return ((lunarInfo[b - 1900] & (65536 >> a)) ? 30 : 29)
}
function Lunar(d) {
	var c, b = 0,
		a = 0;
	var e = (Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
	for (c = 1900; c < 2050 && e > 0; c++) {
		a = lYearDays(c);
		e -= a
	}
	if (e < 0) {
		e += a;
		c--
	}
	this.year = c;
	b = leapMonth(c);
	this.isLeap = false;
	for (c = 1; c < 13 && e > 0; c++) {
		if (b > 0 && c == (b + 1) && this.isLeap == false) {
			--c;
			this.isLeap = true;
			a = leapDays(this.year)
		} else {
			a = monthDays(this.year, c)
		}
		if (this.isLeap == true && c == (b + 1)) {
			this.isLeap = false
		}
		e -= a
	}
	if (e == 0 && b > 0 && c == b + 1) {
		if (this.isLeap) {
			this.isLeap = false
		} else {
			this.isLeap = true;
			--c
		}
	}
	if (e < 0) {
		e += a;
		--c
	}
	this.month = c;
	this.day = e + 1
}
function solarDays(b, a) {
	if (a == 1) {
		return (((b % 4 == 0) && (b % 100 != 0) || (b % 400 == 0)) ? 29 : 28)
	} else {
		return (solarMonth[a])
	}
}
function cyclical(a) {
	return (Gan[a % 10] + Zhi[a % 12])
}
function calElement(a, g, j, b, f, d, e, h, c, i, k) {
	this.isToday = false;
	this.sYear = a;
	this.sMonth = g;
	this.sDay = j;
	this.week = b;
	this.lYear = f;
	this.lMonth = d;
	this.lDay = e;
	this.isLeap = h;
	this.cYear = c;
	this.cMonth = i;
	this.cDay = k;
	this.color = "";
	this.className = "";
	this.lunarFestival = "";
	this.solarFestival = "";
	this.solarTerms = ""
}
function sTerm(c, b) {
	var a = new Date((31556925974.7 * (c - 1900) + sTermInfo[b] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
	return (a.getUTCDate())
}
function calendar(j, t, h) {
	var B, l, A, b, g = 1,
		e, C = 0,
		s, p, o;
	var z, a, f;
	var d = new Array(3);
	var r = 0;
	var c = 0;
	B = new Date(j, t, 1, 0, 0, 0, 0);
	this.length = solarDays(j, t);
	this.firstWeek = B.getDay();
	if (t < 2) {
		z = cyclical(j - 1900 + 36 - 1)
	} else {
		z = cyclical(j - 1900 + 36)
	}
	var v = sTerm(j, 2);
	lichunDate = v;
	var u = sTerm(j, t * 2);
	a = cyclical((j - 1900) * 12 + t + 12);
	var q = Date.UTC(j, t, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
	for (var w = 0; w < this.length; w++) {
		if (g > C) {
			B = new Date(j, t, w + 1);
			l = new Lunar(B);
			A = l.year;
			b = l.month;
			g = l.day;
			e = l.isLeap;
			C = e ? leapDays(A) : monthDays(A, b);
			if (r == 0) {
				c = b
			}
			d[r++] = w - g + 1
		}
		if (t == 1 && (w + 1) == v) {
			z = cyclical(j - 1900 + 36)
		}
		if ((w + 1) == u) {
			a = cyclical((j - 1900) * 12 + t + 13)
		}
		f = cyclical(q + w);
		this[w] = new calElement(j, t + 1, w + 1, nStr1[(w + this.firstWeek) % 7], A, b, g++, e, z, a, f)
	}
	s = sTerm(j, t * 2) - 1;
	p = sTerm(j, t * 2 + 1) - 1;
	switch (j) {
	case 2020:
                switch (t) {
		case 6:
			this[5].solarTerms = "小暑";
			this[21].solarTerms = "大暑";
			break;
		case 7:
			this[6].solarTerms = "立秋";
			this[21].solarTerms = "处暑";
			break;
		case 11:
			this[6].solarTerms = "大雪";
			this[20].solarTerms = "冬至";
			break;
		default:
			solarTerm[t * 2] && (this[s].solarTerms = solarTerm[t * 2]);
			solarTerm[t * 2 + 1] && (this[p].solarTerms = solarTerm[t * 2 + 1])
		}
		break;
	case 2018:
                switch (t) {
		case 2:
			this[4].solarTerms = "惊蛰";
			this[20].solarTerms = "春分";
			break;
		default:
			solarTerm[t * 2] && (this[s].solarTerms = solarTerm[t * 2]);
			solarTerm[t * 2 + 1] && (this[p].solarTerms = solarTerm[t * 2 + 1])
		}
		break;
	case 2017:
                switch (t) {
		case 6:
			this[6].solarTerms = "小暑";
			this[11].solarTerms = "头伏";
			this[21].solarTerms = "大暑";
			this[21].solarTerms = "中伏";
			break;
		case 7:
			this[6].solarTerms = "立秋";
			this[10].solarTerms = "末伏";
			this[22].solarTerms = "处暑";
			this[19].solarTerms = "出伏";
			break;
		case 11:
			this[6].solarTerms = "大雪";
			this[21].solarTerms = "冬至";
			break;
		default:
			solarTerm[t * 2] && (this[s].solarTerms = solarTerm[t * 2]);
			solarTerm[t * 2 + 1] && (this[p].solarTerms = solarTerm[t * 2 + 1])
		}
		break;
	default:
		solarTerm[t * 2] && (this[s].solarTerms = solarTerm[t * 2]);
		solarTerm[t * 2 + 1] && (this[p].solarTerms = solarTerm[t * 2 + 1])
	}
	if (this[s].solarTerms == "清明") {
		this[s - 1].lunarFestival = '<a href="http://baike.baidu.com/view/318.htm" target="blank">寒食节</a>'
	}
	if (true) {
		for (w in sFtv) {
			if (sFtv[w].match(/^(\d{2})(\d{2})([\s\*|\s\#|\s@])(.+)\s+(.+)$/)) {
				if (Number(RegExp.$1) == (t + 1)) {
					if (RegExp.$3 == "*") {
						this[Number(RegExp.$2) - 1].color = "#d02f12"
					} else {
						if (RegExp.$3 == "#") {
							this[Number(RegExp.$2) - 1].color = "#009900"
						} else {
							if (RegExp.$3 == "@") {
								this[Number(RegExp.$2) - 1].color = "#009900"
							} else {
								this[Number(RegExp.$2) - 1].color = ""
							}
						}
					}
					if (RegExp.$4 == "国庆节" || RegExp.$4 == "八一建军节") {
						if (j > 1948) {
							this[Number(RegExp.$2) - 1].solarFestival += '<a href="' + RegExp.$5 + '" target="blank">' + RegExp.$4 + "</a> "
						} else {
							this[Number(RegExp.$2) - 1].color = ""
						}
					} else {
						if (RegExp.$4 == "青年节" || RegExp.$4 == "六一儿童节") {
							if (j > 1949) {
								this[Number(RegExp.$2) - 1].solarFestival += '<a href="' + RegExp.$5 + '" target="blank">' + RegExp.$4 + "</a> "
							} else {
								this[Number(RegExp.$2) - 1].color = ""
							}
						} else {
							if (RegExp.$4 == "香港回归") {
								if (j > 1996) {
									this[Number(RegExp.$2) - 1].solarFestival += '<a href="' + RegExp.$5 + '" target="blank">' + RegExp.$4 + "</a> "
								}
							} else {
								if (RegExp.$4 == "中共建党日") {
									if (j > 1920) {
										this[Number(RegExp.$2) - 1].solarFestival += '<a href="' + RegExp.$5 + '" target="blank">' + RegExp.$4 + "</a> "
									} else {
										this[Number(RegExp.$2) - 1].color = ""
									}
								} else {
									if (RegExp.$4 == "教师节") {
										if (j > 1984) {
											this[Number(RegExp.$2) - 1].solarFestival += '<a href="' + RegExp.$5 + '" target="blank">' + RegExp.$4 + "</a> "
										} else {
											this[Number(RegExp.$2) - 1].color = ""
										}
									} else {
										if (RegExp.$4 == "植树节") {
											if (j > 1978) {
												this[Number(RegExp.$2) - 1].solarFestival += '<a href="' + RegExp.$5 + '" target="blank">' + RegExp.$4 + "</a> "
											} else {
												this[Number(RegExp.$2) - 1].color = ""
											}
										} else {
											if (RegExp.$4.length < 7) {
												this[Number(RegExp.$2) - 1].solarFestival += '<a href="' + RegExp.$5 + '" target="blank">' + RegExp.$4 + "</a> "
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
	var k = j;
	if (k == 2020) {
		for (w in fFtv2020) {
			if (fFtv2020[w].match(/^(\d{2})(\d{2})([\s\*])(.+)$/)) {
				if (Number(RegExp.$1) == (t + 1)) {
					if (RegExp.$4.indexOf("*") !== -1) {
						if (this[Number(RegExp.$2) - 1].solarFestival == "") {
							this[Number(RegExp.$2) - 1].solarFestival = RegExp.$4.split("*")[1] + ""
						}
						this[Number(RegExp.$2) - 1].className = "holidays";
						if (this[Number(RegExp.$2) - 1].color == "") {
							this[Number(RegExp.$2) - 1].color = "#d02f12"
						}
					} else {
						if (RegExp.$4.indexOf("_") !== -1) {
							this[Number(RegExp.$2) - 1].className = "works"
						} else {
							this[Number(RegExp.$2) - 1].solarFestival += RegExp.$4 + ""
						}
					}
				}
			}
		}
	}
	if (k == 2021) {
		for (w in fFtv2021) {
			if (fFtv2021[w].match(/^(\d{2})(\d{2})([\s\*])(.+)$/)) {
				if (Number(RegExp.$1) == (t + 1)) {
					if (RegExp.$4.indexOf("*") !== -1) {
						if (this[Number(RegExp.$2) - 1].solarFestival == "") {
							this[Number(RegExp.$2) - 1].solarFestival = RegExp.$4.split("*")[1] + ""
						}
						this[Number(RegExp.$2) - 1].className = "holidays";
						if (this[Number(RegExp.$2) - 1].color == "") {
							this[Number(RegExp.$2) - 1].color = "#d02f12"
						}
					} else {
						if (RegExp.$4.indexOf("_") !== -1) {
							this[Number(RegExp.$2) - 1].className = "works"
						} else {
							this[Number(RegExp.$2) - 1].solarFestival += RegExp.$4 + ""
						}
					}
				}
			}
		}
	}
	for (w in wFtv) {
		if (wFtv[w].match(/^(\d{2})(\d)(\d)([\s\*|\s\#|\s@])(.+)\s+(.+)$/)) {
			if (Number(RegExp.$1) == (t + 1)) {
				s = Number(RegExp.$2);
				p = Number(RegExp.$3);
				if (s < 5) {
					this[((this.firstWeek > p) ? 7 : 0) + 7 * (s - 1) + p - this.firstWeek].solarFestival += '<a href="' + RegExp.$6 + '" target="blank">' + RegExp.$5 + "</a> "
				} else {
					s -= 5;
					o = (this.firstWeek + this.length - 1) % 7;
					this[this.length - o - 7 * s + p - (p > o ? 7 : 0) - 1].solarFestival += '<a href="' + RegExp.$6 + '" target="blank">' + RegExp.$5 + "</a> "
				}
				this[((this.firstWeek > p) ? 7 : 0) + 7 * (s - 1) + p - this.firstWeek].color = "#009900"
			}
		}
	}
	for (w in lFtv) {
		if (lFtv[w].match(/^(\d{2})(.{2})([\s\*])(.+)\s+(.+)$/)) {
			s = Number(RegExp.$1) - c;
			if (s == -11) {
				s = 1
			}
			if (s >= 0 && s < r) {
				p = d[s] + Number(RegExp.$2) - 1;
				if (p >= 0 && p < this.length && this[p].isLeap != true) {
					this[p].lunarFestival += '<a href="' + RegExp.$5 + '" target="blank">' + RegExp.$4 + "</a> ";
					if (RegExp.$3 == "*") {
						this[p].color = "#d74146"
					}
				}
			}
		}
	}
	if (this[tD - 1]) {
		this[tD - 1].isToday = true
	} else {
		this[0].isToday = true
	}
}
function easter(g) {
	var b = sTerm(g, 5);
	var d = new Date(Date.UTC(g, 2, b, 0, 0, 0, 0));
	var a = new Lunar(d);
	if (a.day < 15) {
		var f = 15 - a.day
	} else {
		var f = (a.isLeap ? leapDays(g) : monthDays(g, a.month)) - a.day + 15
	}
	var e = new Date(d.getTime() + 86400000 * f);
	var c = new Date(e.getTime() + 86400000 * (7 - e.getUTCDay()));
	this.m = c.getUTCMonth();
	this.d = c.getUTCDate()
}
function cDay(b) {
	var a;
	switch (b) {
	case 10:
		a = "初十";
		break;
	case 20:
		a = "二十";
		break;
		break;
	case 30:
		a = "三十";
		break;
		break;
	default:
		a = nStr2[Math.floor(b / 10)];
		a += nStr1[b % 10]
	}
	return (a)
}
var cld, l, g;

function drawCld(d, m, mm, yy) {
	var f, a, o, n, w, p, color;
	if (m != 0) {
		l = new calendar(d, m - 1)
	} else {
		l = new calendar(d - 1, 11)
	}
	if (m != 11) {
		g = new calendar(d, m + 1)
	} else {
		g = new calendar(d + 1, 0)
	}
	cld = new calendar(d, m);
	var b = parseInt($("#current-data-month").text());
	if (b != "1") {
		chineseYear = Animals[(d - 4) % 12]
	} else {
		if (b == "1") {
			chineseYear = Animals[(d - 5) % 12]
		}
	}
	if ((cld.length + cld.firstWeek) > 35) {
		$("#calendar_box").addClass("calendar_low");
		$("ol li").each(function(i) {
			if (i > 34) {
				$(this).show()
			}
		})
	} else {
		$("#calendar_box").removeClass("calendar_low");
		$("ol li").each(function(i) {
			if (i == 34) {
				$(this).addClass("last")
			}
			if (i > 34) {
				$(this).hide()
			}
		})
	}
	for (f = 0; f < 42; f++) {
		sObj = document.getElementById("SD" + f);
		lObj = document.getElementById("LD" + f);
		gObj = document.getElementById("GD" + f);
		a = f - cld.firstWeek;
		$("#GD" + f).removeClass("today").find("span[class='status'],div[class='selected']").remove();
		$("#GD" + f).removeClass("cross_month").removeClass("rest").removeClass("work");
		if (f < cld.firstWeek) {
			var j = parseInt(l.length) - parseInt(cld.firstWeek) + f;
			if (l[j] && l[j].className) {
				if (l[j].className.indexOf("holidays") != -1) {
					$(gObj).addClass("rest").append('<span class="status">休</span>')
				} else {
					if (l[j].className.indexOf("works") != -1) {
						$(gObj).addClass("work").append('<span class="status">班</span>')
					}
				}
			}
			$("#GD" + f).addClass("cross_month");
			$("#SD" + f).html(j + 1).attr("rel", "up");
			$("#LD" + f).html(cDay(l[j].lDay));
			o = l[j].lunarFestival;
			o = o.replace(/<a.*?>/g, "");
			o = o.replace("</a>", "");
			color = l[j].color;
			o = isShowFtv(o);
			n = l[j].solarFestival;
			n = n.replace(/<a.*?>/g, "");
			n = n.replace(/<\/a>/g, "");
			n = isShowFtv(n);
			if (o.length <= 0) {
				for (var sT in solarTerm) {
					if (l[j].solarTerms == solarTerm[sT]) {
						o = solarTerm[sT];
						color = "#0058b2";
						break
					}
				}
			}
			if (o.length <= 0) {
				o = n;
				o = isShowFtv(o)
			}
			if (o.length > 0) {
				if (o.length > 6) {
					o = o.substr(0, 4) + "..."
				}
				lObj.innerHTML = o.fontcolor(color)
			}
		}
		if (f > (cld.firstWeek + cld.length - 1)) {
			if (cld.firstWeek + cld.length < 36 && f < 35) {
				var j = f - (cld.firstWeek + cld.length - 1);
				if (g[j - 1] && g[j - 1].className) {
					if (g[j - 1].className.indexOf("holidays") != -1) {
						$(gObj).addClass("rest").append('<span class="status">休</span>')
					} else {
						if (g[j - 1].className.indexOf("works") != -1) {
							$(gObj).addClass("work").append('<span class="status">班</span>')
						}
					}
				}
				$("#GD" + f).addClass("cross_month");
				$("#SD" + f).html(j).attr("rel", "down");
				$("#LD" + f).html(cDay(g[j - 1].lDay))
			}
			if (cld.firstWeek + cld.length > 35) {
				var j = f - (cld.firstWeek + cld.length - 1);
				if (g[j - 1] && g[j - 1].className) {
					if (g[j - 1].className.indexOf("holidays") != -1) {
						$(gObj).addClass("rest").append('<span class="status">休</span>')
					} else {
						if (g[j - 1].className.indexOf("work") != -1) {
							$(gObj).addClass("work").append('<span class="status">班</span>')
						}
					}
				}
				$("#GD" + f).addClass("cross_month");
				$("#SD" + f).html(j).attr("rel", "down");
				$("#LD" + f).html(cDay(g[j - 1].lDay))
			}
			o = g[j - 1] ? g[j - 1].lunarFestival : "";
			o = o.replace(/<a.*?>/g, "");
			o = o.replace("</a>", "");
			color = g[j - 1] ? g[j - 1].color : "";
			o = isShowFtv(o);
			n = g[j - 1] ? g[j - 1].solarFestival : "";
			n = n.replace(/<a.*?>/g, "");
			n = n.replace(/<\/a>/g, "");
			n = isShowFtv(n);
			if (o.length <= 0) {
				for (var sT in solarTerm) {
					if (g[j - 1] && g[j - 1].solarTerms == solarTerm[sT]) {
						o = solarTerm[sT];
						color = "#0058b2";
						break
					}
				}
			}
			if (o.length <= 0) {
				o = n;
				o = isShowFtv(o)
			}
			if (o.length > 0) {
				if (o.length > 6) {
					o = o.substr(0, 4) + "..."
				}
				lObj.innerHTML = o.fontcolor(color)
			}
		}
		if (a > -1 && a < cld.length) {
			sObj.innerHTML = a + 1;
			if (cld[a].isToday) {
				if (d == new Date().getFullYear() && m == mm && cld[a].sDay == new Date().getDate()) {
					$(gObj).addClass("today").append('<span class="status">今</span>');
					cld[a].realToday = true
				}
				to_day.id = f;
				to_day.jin = cld[a].sYear + "-" + cld[a].sMonth + "-" + cld[a].sDay;
				to_day.N_Date = cld[a].lYear + "-" + cld[a].lMonth + "-" + cld[a].lDay;
				to_day.click_Date = cld[a].sMonth + "_" + cld[a].sDay;
				var h;
				if (cld[a].solarTerms == "" && cld[a].solarFestival == "" && cld[a].lunarFestival == "") {
					h = ""
				} else {
					var solarFtv = isAdFtv(cld[a].solarFestival, adFtv);
					var lunarFtv = isAdFtv(cld[a].lunarFestival, adFtv);
					var solarFtvTmp = $.trim(solarFtv.replace(/<a.*?>/g, "").replace("</a>", ""));
					var lunarFtvTmp = $.trim(lunarFtv.replace(/<a.*?>/g, "").replace("</a>", ""));
					if (solarFtvTmp == lunarFtvTmp) {
						h = '<div class="festival" id="festival"><a href="' + jieqiUrl[cld[a].solarTerms] + '" target="blank">' + cld[a].solarTerms + "</a> " + lunarFtv + "</div>"
					} else {
						h = '<div class="festival" id="festival"><a href="' + jieqiUrl[cld[a].solarTerms] + '" target="blank">' + cld[a].solarTerms + "</a> " + solarFtv + " " + lunarFtv + "</div>"
					}
				}
				var c = "";
				if (h != "") {
					$("#info_letter").html(h)
				} else {
					$("#info_letter").html("")
				}
				$("#info_all").html("<b>" + cld[a].sYear + "年 " + (cld[a].sMonth) + "月" + cld[a].sDay + "日  星期" + cld[a].week + " " + getYearWeek(cld[a].sYear, cld[a].sMonth, cld[a].sDay) + "周</b>");
				$("#info_today").text(cld[a].sDay);
				var e = ["", "正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"],
					k = ["", "初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十", "三十一", "三十二"];
				if (new Date(cld[a].sYear, cld[a].sMonth, cld[a].sDay).getTime() >= new Date(2014, 10, 24).getTime() && new Date(cld[a].sYear, cld[a].sMonth, cld[a].sDay).getTime() < new Date(2014, 11, 22).getTime()) {
					$("#info_nong").html("<b>【" + chineseYear + "年】</b>闰" + e[parseInt(cld[a].lMonth)] + "月" + k[parseInt(cld[a].lDay)])
				} else {
					$("#info_nong").html("<b>【" + chineseYear + "年】</b>" + e[parseInt(cld[a].lMonth)] + "月" + k[parseInt(cld[a].lDay)])
				}
				if (parseInt(cld[a].sYear) == 2013 && parseInt(cld[a].sMonth) == 2 && parseInt(cld[a].sDay) == 3) {
					$("#info_chang").html("壬辰年 葵丑月 庚子日");
					$("#shengxiao").removeClass();
					$("#shengxiao").addClass("date-base " + shengxiaoStyle["龙"])
				} else {
					$("#info_chang").html(cld[a].cYear + "年 " + cld[a].cMonth + "月 " + cld[a].cDay + "日");
					$("#shengxiao").removeClass();
					$("#shengxiao").addClass("date-base " + shengxiaoStyle[chineseYear])
				}
				currentDate = cld[a].sYear + "-" + (parseInt(cld[a].sMonth) < 10 ? "0" + String(cld[a].sMonth) : String(cld[a].sMonth)) + "-" + (parseInt(cld[a].sDay) < 10 ? "0" + String(cld[a].sDay) : String(cld[a].sDay));
				showSha(currentDate);
				var nowDate = new Date().format("yyyy-MM-dd");
				var d1_ar = nowDate.split("-");
				var d2_ar = currentDate.split("-");
				var nowMiliSecond = Date.UTC(d1_ar[0], d1_ar[1] - 1, d1_ar[2]);
				var targetMiliSecond = Date.UTC(d2_ar[0], d2_ar[1] - 1, d2_ar[2]);
				var passedTime = Math.ceil((targetMiliSecond - nowMiliSecond) / 86400000);
				var dayafterorbeforeStr = "";
				if (passedTime == 0) {
					$(".btn-today").text("今日")
				}
				if (passedTime < 0) {
					$(".btn-today").text("返回今日")
				} else {
					if (passedTime > 0) {
						$(".btn-today").text("返回今日")
					}
				}
				if ($("#info_letter").html() == "") {
					$("#info_letter").html('<div class="festival"><a href="http://www.nongli.cn/" target="_blank">一年之计在于春</a></div>')
				}
				var shujiuDate = new Date(targetMiliSecond);
				var res = shujiu(shujiuDate);
				if (res != "") {
					$("#info_letter").append(" " + '<div class="remark">' + res + "</div>");
					$("#info_letter").parent().addClass("rowspan4")
				} else {
					$("#info_letter").parent().removeClass("rowspan4")
				}
				var hisUrl = "/his1.htm";
				var date = String(cld[a].sMonth) + String(cld[a].sDay < 10 ? "0" + cld[a].sDay : cld[a].sDay);
				$(".history_day").attr("href", hisUrl + "?" + date)
			}
			if (!cld[a].realToday) {
				if (cld[a].className === "holidays") {
					$(gObj).addClass("rest");
					$(gObj).append('<span class="status">休</span>')
				} else {
					if (cld[a].className === "works") {
						$(gObj).addClass("work");
						$(gObj).append('<span class="status">班</span>')
					}
				}
			}
			var monthCn = new Array("一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二");
			if (cld[a].lDay == 1) {
				lObj.innerHTML = "" + (cld[a].isLeap ? "" : "") + monthCn[cld[a].lMonth - 1] + "月";
				if (cld[a].sYear == 2014 && cld[a].sMonth == 10 && cld[a].sDay == 24) {
					lObj.innerHTML = "闰" + lObj.innerHTML
				}
			} else {
				lObj.innerHTML = cDay(cld[a].lDay)
			}
			o = cld[a].lunarFestival;
			o = o.replace(/<a.*?>/g, "");
			o = o.replace("</a>", "");
			color = cld[a].color;
			o = isShowFtv(o);
			n = cld[a].solarFestival;
			n = n.replace(/<a.*?>/g, "");
			n = n.replace(/<\/a>/g, "");
			n = isShowFtv(n);
			w = cld[a].solarTerms;
			if (o.length <= 0) {
				for (var sT in solarTerm) {
					if (cld[a].solarTerms == solarTerm[sT]) {
						o = solarTerm[sT];
						color = "#0058b2";
						break
					}
				}
			}
			if (o.length <= 0) {
				o = n;
				o = isShowFtv(o)
			}
			if (o.length > 0) {
				if (o.length > 6) {
					o = o.substr(0, 4) + "..."
				}
				if (!cld[a].realToday) {
					lObj.innerHTML = o.fontcolor(color)
				} else {
					lObj.innerHTML = o
				}
			}
		}
	}
}
function clsHw(m, d) {
	var cls = "";
	for (var w in fFtv2013) {
		if (fFtv2013[w].match(/^(\d{2})(\d{2})([\s\*])(.+)$/)) {
			if (Number(RegExp.$1) == (m + 1) && Number(RegExp.$2) == (d + 1)) {
				if (RegExp.$4.indexOf("*") !== -1) {
					cls = "holidays";
					break
				} else {
					if (RegExp.$4.indexOf("_") !== -1) {
						cls = "works";
						break
					}
				}
			}
		}
	}
	return cls
}
function isShowFtv(ftv) {
	ftv = ftv.replace(/<a.*?>/g, "");
	ftv = ftv.replace(/<\/a>/g, "");
	ftv = $.trim(ftv);
	var spFtv = "国际盲人节 国际聋人节 世界青年联欢节 日本无条件投降日 国际护士节 亚非新闻工作者节 中国国医节 国际气象节 一二·九运动 国际大学生节 香港回归";
	var ftvArr = ftv.split(" ");
	var ft = "";
	for (var i in ftvArr) {
		ft = $.trim(ftvArr[i]);
		if ((ft.indexOf("日") != -1 && (ft.indexOf("日") + 1) == ft.length && ft != "中共建党日") || spFtv.indexOf(ft) != -1) {
			ftvArr[i] = ""
		}
	}
	return ftvArr.join(" ")
}
function isAdFtv(ftv, adFtv) {
	if ($.trim(ftv) == "") {
		return ""
	}
	var tmp = ftv;
	var date = new Date();
	var m = date.getMonth() + 1;
	var d = date.getDate();
	for (var i in adFtv) {
		tmp = tmp.replace(/<a.*?>/g, "");
		tmp = tmp.replace("</a>", "");
		tmp = $.trim(tmp);
		i.match(/^(\d{2})(\d{2})\s+(.*?)$/);
		if (Number(RegExp.$1) == m && Number(RegExp.$2) == d && $.trim(RegExp.$3) == tmp) {
			ftv = '<span id="info_letter" class="jieri">' + adFtv[i] + "</span>";
			break
		}
	}
	return ftv
}
function changeCld(aaa) {
	if (aaa != undefined) {
		yy = aaa
	}
	var b, a;
	b = parseInt($("#current-data").text());
	a = parseInt(parseInt($("#current-data-month").text()) - 1);
	tM = a;
	drawCld(b, a, mm, yy)
}
var Today = new Date();
var tY = Today.getFullYear();
var tM = Today.getMonth();
var tD = Today.getDate();
var mm, yy;
var width = "200";
var offsetx = 2;
var offsety = 8;
var x = 0;
var y = 0;
var snow = 0;
var sw = 0;
var cnt = 0;
var to_day = {
	id: null,
	N_Date: "",
	ip: "",
	Y_Date: "",
	click_Date: "",
	jin: null
};

function pushBtm(b, h) {
	!h && showPageFun("Date");
	switch (b) {
	case "MU":
		$("#holiday_plan").html("2021年放假安排");
		$(".btn-today").text("返回今日");
		if (parseInt($("#current-data-month").text()) > 1) {
			$("#current-data-month").html((parseInt($("#current-data-month").text()) - 1) + "月")
		} else {
			$("#current-data-month").text(12 + "月");
			if (parseInt($("#current-data").text()) - 1901 > 0) {
				$("#current-data").text((parseInt($("#current-data").text()) - 1) + "年")
			}
		}
		break;
	case "MD":
		$("#holiday_plan").html("2021年放假安排");
		$(".btn-today").text("返回今日");
		if (parseInt($("#current-data-month").text()) < 12) {
			$("#current-data-month").text((parseInt($("#current-data-month").text()) + 1) + "月")
		} else {
			$("#current-data-month").text(1 + "月");
			if (parseInt($("#current-data").text()) - 1900 < 149) {
				$("#current-data").text((parseInt($("#current-data").text()) + 1) + "年")
			}
		}
		break;
	case "YU":
		$("#holiday_plan").html("2021年放假安排");
		$(".btn-today").text("返回今日");
		if (parseInt($("#current-data").text()) > 1901) {
			$("#current-data").html((parseInt($("#current-data").text()) - 1) + "年")
		}
		break;
	case "YD":
		$("#holiday_plan").html("2021年放假安排");
		$(".btn-today").text("返回今日");
		if (parseInt($("#current-data").text()) < 2049) {
			$("#current-data").html((parseInt($("#current-data").text()) + 1) + "年")
		}
		break;
	case "JT":
		tD = Today.getDate();
		$(".a_1").text("今日");
		$("#holiday_plan").html("2021年放假安排");
		$("#info_diffday").text("今天");
		$("#current-data").text(Today.getFullYear() + "年");
		$("#current-data-month").text((parseInt(Today.getMonth()) + 1) + "月");
		break;
	default:
		tD = b.split("-")[2];
		$(".a_1").text("今日");
		$("#holiday_plan").html("2021年放假安排");
		$("#info_diffday").text("今天");
		$("#current-data").text(b.split("-")[0] + "年");
		$("#current-data-month").text((parseInt(b.split("-")[1])) + "月");
		break
	}
	var yy = parseInt($("#current-data-month").text()) - 1;
	changeCld(yy)
}
function mOvr(n) {
	var b = parseInt($("#current-data-month").text()),
		j = parseInt($("#current-data").text()),
		c = parseInt($("#GD" + n).text());
	if (b == 2) {
		if (c < lichunDate) {
			chineseYear = Animals[(j - 5) % 12]
		} else {
			chineseYear = Animals[(j - 4) % 12]
		}
	}
	var i = $("#SD" + n);
	if ($.trim(i.html()) == "" && $.trim($("#LD" + n).html()) == "") {
		return
	}
	if ($("#GD" + n).hasClass("cross_month")) {
		if (i.attr("rel") && i.attr("rel") == "up") {
			var g = Math.abs(cld.firstWeek - n);
			pushBtm("MU");
			var e = cld.firstWeek + cld.length - g;
			$("ol li").eq(e).trigger("click")
		} else {
			var g = n - cld.firstWeek - cld.length;
			pushBtm("MD");
			var e = cld.firstWeek + g;
			$("ol li").eq(e).trigger("click")
		}
		return
	}
	if (to_day.id != null) {
		$("#GD" + to_day.id).find('div[class="selected"]').remove()
	}
	to_day.id = n;
	var o, k;
	var h = document.getElementById("SD" + n);
	if ($("#GD" + n).attr("week") == "sun") {
		$("#GD" + n).append('<div class="selected" style="width:90px;"></div>')
	} else {
		$("#GD" + n).append('<div class="selected"></div>')
	}
	var l = h.innerHTML - 1;
	if (h.innerHTML != "") {
		if (cld[l].solarTerms == "" && cld[l].solarFestival == "" && cld[l].lunarFestival == "") {
			k = ""
		} else {
			k = "";
			var n = "";
			if (parseInt(cld[l].sYear) > 1948) {
				n = cld[l].solarFestival
			}
			var solarT = "";
			if (cld[l].solarTerms) {
				solarT = '<a href="' + jieqiUrl[cld[l].solarTerms] + '" target="blank">' + cld[l].solarTerms + "</a>"
			}
			var solarFtv = isAdFtv(n, adFtv);
			var lunarFtv = isAdFtv(cld[l].lunarFestival, adFtv);
			var solarFtvTmp = $.trim(solarFtv.replace(/<a.*?>/g, "").replace("</a>", ""));
			var lunarFtvTmp = $.trim(lunarFtv.replace(/<a.*?>/g, "").replace("</a>", ""));
			if (solarFtvTmp == lunarFtvTmp) {
				k = '<div class="festival" id="festival">' + solarT + " " + lunarFtv + "</div>"
			} else {
				k = '<div class="festival" id="festival">' + solarT + " " + solarFtv + " " + lunarFtv + "</div>"
			}
		}
		var a = "";
		$("#info_all").html("<b>" + cld[l].sYear + "年 " + cld[l].sMonth + "月" + cld[l].sDay + "日  星期" + cld[l].week + " " + getYearWeek(cld[l].sYear, cld[l].sMonth, cld[l].sDay) + "周</b>");
		var f = ["", "正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"],
			m = ["", "初一", "初二", "初三", "初四", "初五", "初六", "初七", "初八", "初九", "初十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "廿一", "廿二", "廿三", "廿四", "廿五", "廿六", "廿七", "廿八", "廿九", "三十", "三十一", "三十二"];
		tD = cld[l].sDay;
		if (new Date(cld[l].sYear, cld[l].sMonth, cld[l].sDay).getTime() >= new Date(2014, 10, 24).getTime() && new Date(cld[l].sYear, cld[l].sMonth, cld[l].sDay).getTime() < new Date(2014, 11, 22).getTime()) {
			$("#info_nong").html("<b>【" + chineseYear + "年】</b>闰" + f[parseInt(cld[l].lMonth)] + "月" + m[parseInt(cld[l].lDay)])
		} else {
			$("#info_nong").html("<b>【" + chineseYear + "年】</b>" + f[parseInt(cld[l].lMonth)] + "月" + m[parseInt(cld[l].lDay)])
		}
		$("#info_today").html(cld[l].sDay);
		if (parseInt(cld[l].sYear) == 2013 && parseInt(cld[l].sMonth) == 2 && parseInt(cld[l].sDay) == 3) {
			$("#info_chang").html("壬辰年 葵丑月 庚子日");
			$("#shengxiao").removeClass();
			$("#shengxiao").addClass("date-base " + shengxiaoStyle["龙"])
		} else {
			$("#info_chang").html(cld[l].cYear + "年 " + cld[l].cMonth + "月 " + cld[l].cDay + "日");
			$("#shengxiao").removeClass();
			$("#shengxiao").addClass("date-base " + shengxiaoStyle[chineseYear])
		}
		$("#info_letter").html(k);
		to_day.click_Date = cld[l].sMonth + "_" + cld[l].sDay;
		currentDate = cld[l].sYear + "-" + (parseInt(cld[l].sMonth) < 10 ? "0" + String(cld[l].sMonth) : String(cld[l].sMonth)) + "-" + (parseInt(cld[l].sDay) < 10 ? "0" + String(cld[l].sDay) : String(cld[l].sDay));
		showSha(currentDate);
		var hisUrl = "/his1.htm";
		var date = String(cld[l].sMonth) + String(cld[l].sDay < 10 ? "0" + cld[l].sDay : cld[l].sDay);
		$(".history_day").attr("href", hisUrl + "?" + date);
		var nowDate = new Date().format("yyyy-MM-dd");
		var d1_ar = nowDate.split("-");
		var d2_ar = currentDate.split("-");
		var nowMiliSecond = Date.UTC(d1_ar[0], d1_ar[1] - 1, d1_ar[2]);
		var targetMiliSecond = Date.UTC(d2_ar[0], d2_ar[1] - 1, d2_ar[2]);
		var passedTime = Math.ceil((targetMiliSecond - nowMiliSecond) / 86400000);
		var dayafterorbeforeStr = "";
		if (passedTime == 0) {
			$(".btn-today").text("今日")
		}
		if (passedTime < 0) {
			$(".btn-today").text("返回今日")
		} else {
			if (passedTime > 0) {
				$(".btn-today").text("返回今日")
			}
		}
		var shujiuDate = new Date(targetMiliSecond);
		var res = shujiu(shujiuDate);
		if ($("#info_letter").html() == "") {
			$("#info_letter").html('<div class="festival"><a href="http://www.nongli.cn" target="_blank">一年之计在于春</a></div>')
		}
		var shujiuDate = new Date(targetMiliSecond);
		var res = shujiu(shujiuDate);
		if (res != "") {
			$("#info_letter").append(" " + '<div class="remark">' + res + "</div>");
			$("#info_letter").parent().addClass("rowspan4")
		} else {
			$("#info_letter").parent().removeClass("rowspan4")
		}
	}
	//window.alert($("#info_all")[0].innerHTML);	
	pb.invoke("w_calendar_choice.wf_msg", $("#info_all")[0].innerHTML);
}
Date.prototype.format = function(format) {
	var o = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S": this.getMilliseconds()
	};
	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length))
		}
	}
	return format
};

function reEvent(e) {
	var e = e || window.event;
	if (e.preventDefault) {
		e.preventDefault()
	} else {
		e.returnValue = false
	}
	return e
}
function showMenuAni(el, top) {
	el.css("display", "block");
	el.parent().addClass("active")
}
function closeMenuAni(el, top) {
	el.css("display", "none");
	el.parent().removeClass("active")
}
function showPageFun(p, bacFun) {
	if (p) {
		$("#date_count_btn").removeClass("a_4");
		$("#record_saved").removeClass("a_4");
		$("#date_tips").show();
		if (bacFun) {
			bacFun()
		}
		return 1
	}
}
function initial() {
	$("body").bind("click", function(e) {
		if (e.target.id != "select-year" && e.target.id != "current-data" && $(e.target).prev().attr("id") != "current-data") {
			closeMenuAni($("#select-year"))
		}
		if (e.target.id != "current-data-month" && e.target.id != "select-month" && $(e.target).prev().attr("id") != "current-data-month") {
			closeMenuAni($("#select-month"))
		}
		if (e.target.id != "holiday_plan" && e.target.id != "holiday_list" && $(e.target).prev().attr("id") != "holiday_plan") {
			closeMenuAni($("#holiday_list"))
		}
	});
	$("#holiday_plan").click(function(e) {
		var e = reEvent(e);
		if ($("#holiday_list").css("display") === "none") {
			showMenuAni($("#holiday_list"))
		} else {
			closeMenuAni($("#holiday_list"))
		}
	});
	$("#holiday_list li").click(function(e) {
		var e = reEvent(e);
		if (showPageFun("Date") == 1) {
			closeMenuAni($("#holiday_list"));
			$("#holiday_plan").html($(this).text());
			$("#current-data-month").text($(this).attr("rel") + "月");
			$("#current-data").text("2021年");
			var yy = parseInt($(this).attr("rev"));
			tD = $(this).attr("red");
			changeCld(yy)
		}
	});
	$("#current-data").click(function(e) {
		var e = reEvent(e),
			t = $(this);
		if ($("#select-year").css("display") === "block") {
			closeMenuAni($("#select-year"))
		} else {
			var mon_list = $("#select-month");
			closeMenuAni(mon_list);
			showMenuAni($("#select-year"));
			var tempYear = parseInt($("#current-data").text());
			var top = parseInt(tempYear - 1901) * 20;
			$("#select-year").scrollTop(top)
		}
	});
	$("#current-data-month").click(function(e) {
		var e = reEvent(e);
		var t = $(this);
		if ($("#select-month").css("display") === "block") {
			closeMenuAni($("#select-month"))
		} else {
			var year = $("#select-year");
			closeMenuAni(year);
			showMenuAni($("#select-month"))
		}
	});
	$("#select-year li,#select-month li").click(function(e) {
		$(".btn-today").text("返回今日");
		$("#holiday_plan").html("2021年放假安排");
		var e = reEvent(e),
			t = $(this);
		var temp = t.html();
		if ($(e.target).parent().attr("id") === "select-year") {
			temp = temp.replace("年", "");
			t.text(temp);
			$("#current-data").text(t.text() + "年");
			t.html(temp + "年")
		} else {
			temp = temp.replace(/月|\s*/g, "");
			t.text(temp);
			t.html(temp + "月");
			$("#current-data-month").html(t.html())
		}
		currentDate = parseInt($("#current-data").text()) + "-" + (parseInt($("#current-data-month").text()) < 10 ? "0" + String(parseInt($("#current-data-month").text())) : String(parseInt($("#current-data-month").text()))) + "-01";
		var nowDate = new Date().format("yyyy-MM-dd");
		var d1_ar = nowDate.split("-");
		var d2_ar = currentDate.split("-");
		var nowMiliSecond = Date.UTC(d1_ar[0], d1_ar[1] - 1, d1_ar[2]);
		var targetMiliSecond = Date.UTC(d2_ar[0], d2_ar[1] - 1, d2_ar[2]);
		var passedTime = Math.ceil((targetMiliSecond - nowMiliSecond) / 86400000);
		var dayafterorbeforeStr = "";
		if (passedTime == 0) {
			dayafterorbeforeStr = "今天"
		}
		if (passedTime < 0) {
			dayafterorbeforeStr = Math.abs(passedTime) + "天前"
		} else {
			if (passedTime > 0) {
				dayafterorbeforeStr = passedTime + "天后"
			}
		}
		$("#info_diffday").html(dayafterorbeforeStr);
		var yy = parseInt($("#current-data-month").text()) - 1;
		changeCld(yy);
		closeMenuAni(t.closest(".list"))
	});
	if ($.browser.msie && $.browser.version === "6.0") {
		$("#select-year li,#select-month li,#holiday_list li").mouseover(function() {
			$(this).addClass("hover")
		}).mouseout(function() {
			$(this).removeClass("hover")
		})
	}
	var ttt = new Date();
	mm = ttt.getMonth();
	$("#current-data").text(tY + "年");
	$("#current-data-month").text((parseInt(tM) + 1) + "月");
	var yy = parseInt($("#current-data-month").text()) - 1;
	drawCld(tY, tM, mm, yy);
	if ($("ol li:visible").length < 35) {
		for (var i = 28; i < 35; i++) {
			$("#GD" + i).show()
		}
	}
}
function loadJs(_url, _callback) {
	var callback = arguments[1] ||
	function() {};
	var _script = document.createElement("SCRIPT");
	_script.setAttribute("type", "text/javascript");
	_script.setAttribute("src", _url);
	document.getElementsByTagName("head")[0].appendChild(_script);
	if (document.all) {
		_script.onreadystatechange = function() {
			if (/onload|loaded|complete/.test(_script.readyState)) {
				callback && callback()
			}
		}
	} else {
		_script.onload = function() {
			callback()
		}
	}
}
function showYiAndJi(date) {
	return;
	var year = date.substr(0, 4);
	if (year < 1998 || year > 2037) {
		return false
	}
	var jsFile = "/rili/api/app/yjcs/" + year + ".js";
	loadJs(jsFile)
}
function lmanac_2345() {
	var today = currentDate;
	var _date = today.split("-");
	var year = _date[0];
	var month = _date[1];
	var day = _date[2];
	var index_ = "d" + month + day;
	var yjcs_ = lmanac[year][index_];
	var yiHtml = new Array(),
		jiHtml = new Array();
	if (yjcs_.y.length > 0) {
		if (yjcs_.y.length >= 10) {
			yi_length = 10
		} else {
			yi_length = yjcs_.y.length
		}
		for (var i = 0; i < yi_length; i++) {
			if (i < 5) {
				yiHtml.push('<a href="huangli.htm#cx" target="_blank">' + yjcs_.y[i] + "</a>\n")
			} else {
				yiHtml.push('<a href="huangli.htm#cx" target="_blank">...</a>\n');
				break
			}
		}
	}
	$("#yi").html('<div class="icon"></div>\n' + yiHtml.join(""));
	if (yjcs_.j.length > 0) {
		if (yjcs_.j.length >= 10) {
			ji_length = 10
		} else {
			ji_length = yjcs_.j.length
		}
		for (var j = 0; j < ji_length; j++) {
			if (j < 5) {
				jiHtml.push('<a href="/rili/huangli.htm#cx" target="_blank">' + yjcs_.j[j] + "</a>\n")
			} else {
				jiHtml.push('<a href="/rili/huangli.htm#cx" target="_blank">...</a>\n');
				break
			}
		}
	}
	$("#ji").html('<div class="icon"></div>\n' + jiHtml.join(""));
	$("#hMore").attr("href", "jiri.htm?date=" + today + "#1")
}
function addFavorite() {
	var url = window.location;
	var name = document.title;
	try {
		window.external.addFavorite(url, name)
	} catch (e) {
		try {
			window.sidebar.addPanel(name, url, "")
		} catch (e) {
			alert("您的浏览器暂不支持该功能，请使用Ctrl+D加入到收藏夹")
		}
	}
}
function showSha(currentDate) {
	var dd = currentDate.split("-");
	var year = dd[0];
	var month = dd[1];
	var day = dd[2];
	if (year < 2010 || year > 2037) {
		return false
	}
	var fileName = "/rili/api/app/god/" + year + "/" + month + "/" + year + month + day + ".js";
	var yiHtml = new Array(),
		jiHtml = new Array(),
		shaHtml = new Array();
	yiHtml.push('<div class="icon"></div>\n');
	jiHtml.push('<div class="icon"></div>\n');
	shaHtml.push('<div class="icon"></div>\n');
	$.ajax({
		type: "GET",
		url: fileName,
		dataType: "text",
		success: function(msg) {
			var json = eval("(" + msg + ")");
			var yiArr = json.html.yi.split(" ");
			var url = "/rili/huangli.htm?date=" + currentDate + "#cx";
			for (var i = 0; i < yiArr.length; i++) {
				if (i < 5) {
					yiHtml.push('<a href="' + url + '" target="_blank">' + yiArr[i] + "</a>\n")
				} else {
					yiHtml.push('<a href="' + url + '" target="_blank">...</a>\n');
					break
				}
			}
			if (json.html.ji.length > 16) {
				jiHtml.push('<a href="' + url + '" target="_blank" title="' + json.html.ji + '">' + json.html.ji.substring(0, 14) + "...</a>\n")
			} else {
				jiHtml.push('<a href="' + url + '" target="_blank" title="' + json.html.ji + '">' + json.html.ji + "</a>\n")
			}
			shaHtml.push('<a href="' + url + '" target="_blank">' + json.html.chong + "</a>\n");
			$("#yi").html(yiHtml.join(""));
			$("#ji").html(jiHtml.join(""));
			$("#chong").html(shaHtml.join(""));
			$("#cai").html("财神：" + json.html.cai).attr("href", url);
			$("#xi").html("喜神：" + json.html.xi).attr("href", url);
			$("#fu").html("福神：" + json.html.fu).attr("href", url)
		}
	})
}
var getYearWeek = function(a, b, c) {
		var date1 = new Date(a, parseInt(b) - 1, c),
			date2 = new Date(a, 0, 1),
			d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);
		return Math.ceil((d + ((date2.getDay() + 1) - 1)) / 7)
	};
initial();