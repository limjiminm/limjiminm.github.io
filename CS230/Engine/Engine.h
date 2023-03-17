/*
Copyright (C) 2023 DigiPen Institute of Technology
Reproduction or distribution of this file or its contents without
prior written consent is prohibited
File Name:  Engine.h
Project:    CS230 Engine
Author:     Jonathan Holmes , Jimin Lim(jimin.lim@digipen.edu)
Created:    March 8, 2023
Updated:    March 13, 2023
*/
#pragma once
#include "Window.h"
#include "Logger.h"
#include "GameStateManager.h"

class Engine {
public:
    static Engine& Instance() {
        static Engine instance;
        return instance;
    }
    static CS230::Logger& GetLogger() {
        return Instance().logger;
    }
    static CS230::Window& GetWindow() {
        return Instance().window;
    }
    static CS230::GameStateManager& GetGameStateManager() {
        return Instance().gamestatemanager;
    }

    bool HasGameEnded();

    void Start(std::string window_title);
    void Stop();
    void Update();
    

private:
    Engine();
    ~Engine();

    CS230::Logger logger;
    CS230::Window window;
    CS230::GameStateManager gamestatemanager;
};