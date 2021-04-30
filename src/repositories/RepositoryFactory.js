
import IndexRepository from "@/repositories/IndexRepository";
import SessionRepository from "@/repositories/SessionRepository";

const repositories = {
    'index': IndexRepository,
    'session': SessionRepository,
}
export default {
    get: name => repositories[name]
};