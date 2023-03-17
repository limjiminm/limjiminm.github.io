/*
Copyright (C) 2023 DigiPen Institute of Technology
Reproduction or distribution of this file or its contents without
prior written consent is prohibited
File Name:  GameState.h
Project:    CS230 Engine
Author:     Jonathan Holmes
Created:    March 8, 2023
*/

#pragma once
#include <string>

namespace CS230 {
    class GameState {
    public:
        virtual void Load() = 0;
        virtual void Update() = 0;
        virtual void Unload() = 0;
        virtual std::string GetName() = 0;
    private:
    };
}

