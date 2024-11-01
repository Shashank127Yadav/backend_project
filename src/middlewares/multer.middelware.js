import multer from "mulrer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, ".public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.filename); // filename
  },
});

export const upload = multer({
  storage,
});
