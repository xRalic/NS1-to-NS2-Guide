/** @param {NS} ns **/
export async function main(ns) {
	var servers0Port = ["n00dles",
						"sigma-cosmetics",
						"joesguns",
						"nectar-net",
						"hong-fang-tea",
						"harakiri-sushi"];
	var servers1Port = ["neo-net",
						"zer0",
						"max-hardware",
						"iron-gym"];
	for (var i = 0; i < servers0Port.length; ++i) {
		var serv = servers0Port[i];

		scp("early-hack-template.script", serv);
		nuke(serv);
		exec("early-hack-template.script", serv, 6);
	}
	while (!fileExists("BruteSSH.exe")) {
		sleep(60000);
	}
	for (var i = 0; i < servers1Port.length; ++i) {
		var serv = servers1Port[i];

		scp("early-hack-template.script", serv);
		brutessh(serv);
		nuke(serv);
		exec("early-hack-template.script", serv, 12);
	}
}