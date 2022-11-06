import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { BashCommandRequestDto, BashCommandResponseDto } from './dto/gitBash.dto';

@Injectable()
export class gitBashService {
    async help(): Promise<string[]> {
        return await new Promise((resolve, reject) => {
            exec('git --help', (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    reject(error);
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    reject(stderr);
                }
                console.log(`stdout: ${stdout}`);
                resolve(stdout.split('\n'));
            });
        });
    }

    async runBashCommand(command: BashCommandRequestDto): Promise<BashCommandResponseDto> {
        return await new Promise((resolve, reject) => {
            exec(command.command, (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    reject(error);
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    reject(stderr);
                }
                console.log(`stdout: ${stdout}`);
                resolve({ command: command.command, stdout: stdout.split('\n') });
            });
        });
    }

    async availableCommands(): Promise<string[]> {
        return await new Promise((resolve, reject) => {
            resolve(["git add", "git branch", "git checkout", "git clone", "git commit", "git diff", "git fetch", "git grep", "git init", "git log", "git merge", "git mv", "git pull", "git push", "git rebase", "git reset", "git rm", "git show", "git status", "git tag"]);
        });
    }

    async availableBranches(): Promise<string[]> {
        return await new Promise((resolve, reject) => {
            exec('git branch -a', (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    reject(error);
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    reject(stderr);
                }
                console.log(`stdout: ${stdout}`);
                resolve(stdout.split('\n'));
            });
        });
    }

}
