"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = __importDefault(require());
const app = (0, module_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send("Hello from Typescript backend");
});
app.listen(port, () => console.log(`Server running on ${port}`));
