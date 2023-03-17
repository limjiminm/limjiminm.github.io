/*
Copyright (C) 2023 DigiPen Institute of Technology
Reproduction or distribution of this file or its contents without
prior written consent is prohibited
File Name:  Window.h
Project:    CS230 Engine
Author:     Jonathan Holmes
Created:    March 8, 2023
*/

#pragma once
#include <string>

namespace CS230 {
    class Window {
    public:
        void Start(std::string title);
        void Update();
    private:
        const int default_width = 800;
        const int default_height = 600;
    };
}

