const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
	res.render("index", { title: "BnbInvest" });
});
router.route("/about").get((req, res) => {
	res.render("about", { title: "About - BnbInvest" });
	// res.redirect("/")
});
router.route("/contact-us").get((req, res) => {
	res.render("contact", { title: "Contact us - BnbInvest" });
});

module.exports = router;
